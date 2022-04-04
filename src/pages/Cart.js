import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import { useCartContext } from "../context/CartContext";

const Cart = () => {

    const checkoutSubmit = async (e, inputData) => {

        e.preventDefault();
        const buyer = { ...inputData }
        const order = {
            buyer, item: cart.map(element => {
                let { id, title, price } = element.product;
                return { id, title, price };
            }), date: new Date(), total: cart.reduce((acum, item) => acum + (item.quantity * item.product.price), 0)
        }
        const ordersCollection = collection(getFirestore(), 'orders')
        let orderCreated = await addDoc(ordersCollection, order)
        alert("Se ha creado su orden, con id: " + orderCreated.id);
        await updateStock(cart);
        clearCart();

    }

    const updateStock = async (cart) => {
        try {

            const queryCollection = collection(getFirestore(), 'items')
            const queryUpdateStock = query(
                queryCollection,
                where(documentId(), 'in', cart.map(cartItem => cartItem.product.id)))
            const batch = writeBatch(getFirestore())


            let products = await getDocs(queryUpdateStock)
            products.docs.forEach(res => {
                batch.update(res.ref, {
                    stock: res.data().stock - cart.find(cartItem => cartItem.product.id === res.id).cantidad
                })
            })

            await batch.commit()
        } catch (error) {
            console.warn(error);
        }
    }

    const { cart, removeFromCart, clearCart } = useCartContext();

    const tabla = cart.map((item, index) => {

        return (
            <tr key={index}>
                <td>{item.product.title}</td>
                <td>${item.product.price}</td>
                <td>{item.quantity}</td>
                <td>${item.product.price * item.quantity}</td>
                <td><button className="btn btn-danger" onClick={(e) => removeFromCart(e, item.product.id)}>Eliminar</button></td>
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
                cart.length > 0 &&
                <>
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>Total producto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tabla}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => clearCart()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td colSpan="3" />
                                        <td>Total - AR$
                                            {cart.reduce((acum, item) => acum + (item.quantity * item.product.price), 0)}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="col-12 col-md-4">
                            <Form submitHandler={checkoutSubmit} />
                        </div>
                    </div>
                </>
            }
            {cart.length === 0 && <EmptyCart />}
        </div>
    );
}

export default Cart;