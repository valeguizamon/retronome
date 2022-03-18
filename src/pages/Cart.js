import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import { useCartContext } from "../context/CartContext";


const Cart = () => {

    const checkoutSubmit = async (e, inputData) => {
        
        e.preventDefault();
        //{ buyer: { name, phone, email }, items: [{id, title, price}], date, total  }
        const buyer = { ...inputData }
        const order = {buyer, item: carrito.map( elemento => {
            let {id, title, price} = elemento.producto;
            return {id, title, price};
        }), date: new Date(), total : carrito.reduce((acum, item) => acum + (item.cantidad * item.producto.price), 0) }
        const ordersCollection = collection(getFirestore(), 'orders')
        let orderCreated = await addDoc(ordersCollection, order)
        console.log("order", orderCreated);
        alert("Se ha creado su orden, con id: " + orderCreated.id );
        await updateStock(carrito);
        clearCart();

    }

    const updateStock = async (cart) => {
        try {
    
            const queryCollection = collection(getFirestore(), 'items')
            const queryUpdateStock = query(
                queryCollection,
                where(documentId(), 'in', cart.map(cartItem => cartItem.producto.id)))
            const batch = writeBatch(getFirestore())
    
    
            let products = await getDocs(queryUpdateStock)
            products.docs.forEach(res => {
                batch.update(res.ref, {
                    stock: res.data().stock - cart.find(cartItem => cartItem.producto.id ===res.id).cantidad
                })
            })
    
            await batch.commit()
        } catch (error) {
            console.warn(error);
        }
    }

    const { carrito, removeFromCart, clearCart } = useCartContext();

    const tabla = carrito.map((asd, index) => {

        return (
            <tr key={index}>
                <td>{asd.producto.title}</td>
                <td>{asd.producto.price}</td>
                <td>{asd.cantidad}</td>
                <td>{asd.producto.price * asd.cantidad}</td>
                <td><button className="btn btn-danger" onClick={(e) => removeFromCart(e, asd.producto.id)}>Eliminar</button></td>
            </tr>
        )
    });

    const EmptyCart = () => {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Su carrito esta vacio! :'(</h1>
                <p className="lead">Desea ir al Inicio a ver productos? </p>
                <Link className="btn btn-primary btn-lg" to="/home" role="button"> Inicio </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            {
                carrito.length > 0 &&
                <>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabla}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4"></td>
                                <td>Total - AR$
                                    {carrito.reduce((acum, item) => acum + (item.cantidad * item.producto.price), 0)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                    <Form submitHandler={checkoutSubmit}/>
                </>
            }
            {carrito.length === 0 && <EmptyCart />}
        </div>
    );
}

export default Cart;