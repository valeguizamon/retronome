import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Cart = () => {

    const { carrito, removeFromCart, clearCart } = useCartContext();
    console.log(carrito);

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
                        {carrito.reduce((acum, item)=> acum + (item.cantidad * item.producto.price) ,0) }
                        </td>
                        </tr>
                    </tfoot>
                </table>
            }
            {carrito.length === 0 && <EmptyCart />}
        </div>
    );
}

export default Cart;