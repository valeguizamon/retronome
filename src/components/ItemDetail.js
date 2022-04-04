import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

    const {addToCart} = useCartContext();

    const onAdd = (e, count) => {
        addToCart(product, count);
    }
    
    return (
        <div className="container mt-5" id="product-detail">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={product.pictureUrl} alt="product" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <div className="product-info d-grid gap-2">
                        <h1>{product.title}</h1>
                        <h3>${product.price}</h3>
                        <hr />
                        <p>{product.description}</p>
                        <ItemCount stock={product.stock} value={1} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;