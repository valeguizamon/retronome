import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart-context/CartContextProvider';

const Cart = () => {

    const { carrito, removefromCart } = useCartContext();

    let tr = carrito.map((elemento, index) => {
        return (
            <tr key={index} className="cart-item-table-row col-12 ">
                <td className="col-md-1 td-text"> <button className="btn" onClick={() => { removefromCart(elemento.item) }}>Borrar elemento</button> </td>
                <td className="col-md-8">
                    <img className="cart-item-img" src={elemento.item.pictureUrl} alt="" />
                    <Link to={'/item/' + elemento.item.id} className="link-item"> {elemento.item.title} </Link>
                </td>
                <td className="col-md-1 td-text"><span>{elemento.quantity}</span></td>
                <td className="col-md-1 td-text"><span>${elemento.item.price}</span></td>
                <td className="col-md-1 td-text"><span>${elemento.item.price * elemento.quantity}</span></td>
            </tr>
        );
    });

    return (
        <div>
            <div className="container my-5 d-flex">
                soy el cart
                <div className="cart-table col-md-8">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tr
                            }
                        </tbody>
                    </table>
                </div>
                <div className="cart-checkout col-md-4">
                    CHECKOUT..(WORKING)
                </div>
            </div>
        </div>

    )
}

export default Cart;