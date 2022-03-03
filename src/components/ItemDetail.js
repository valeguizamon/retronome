import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

    const {addToCart} = useCartContext();

    const onAdd = (e, count) => {
        
        console.log("Desde el ItemDetail")
        console.log("La cantidad de items agregados al carrito es de: " + count);
        
        console.log(count);

        addToCart(product, count);

    }
    
    return (
        <div className="container mt-5" id="product-detail">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={product.pictureUrl} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <div className="product-info d-grid gap-2">
                        <h1>{product.title}</h1>
                        <h3>${product.price}</h3>
                        <hr />
                        <p>{product.description}</p>
                        <ItemCount stock={20} value={1} onAdd={onAdd}/>
                        <Link className="btn btn-primary btn-block" to={"/cart"}>Terminar Compra</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;