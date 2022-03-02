import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

    const [carrito, setCarrito] = useState({});

    const onAdd = (e, count) => {
        e.preventDefault();
        console.log("Desde el ItemDetail")
        console.log("La cantidad de items agregados al carrito es de: " + count);
    
        setCarrito(count * product.price);
        console.log("El total del carrito es de: $" + parseInt(carrito));
    }
    
    return (
        <div className="container mt-5" id="product-detail">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={product.pictureUrl} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <div className="product-info">
                        <h1>{product.title}</h1>
                        <h3>${product.price}</h3>
                        <hr />
                        <p>{product.description}</p>
                        <ItemCount stock={20} value={1} onAdd={onAdd}/>
                        <button onClick={onAdd}>Terminar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;