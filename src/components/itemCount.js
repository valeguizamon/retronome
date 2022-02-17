import { useState } from "react";

const ItemCount = ({stock, value}) => {
    
    const [count, setCount] = useState(value);

    const sumar = () => {
        setCount((count < stock) ? count + 1 : stock);
    }

    const restar = () => {
        setCount((count > value) ? count - 1 : value);
    }

    const onAdd = (e, count) =>{
        e.preventDefault();
        console.log("La cantidad de items agregados al carrito es de: " + count);
    }

    return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Contador</h5>
                <div className="d-flex">
                    <button className="btn btn-outline-dark" onClick={restar} disabled={stock === 0}>-</button>
                    <input type="number" className="form-control text-center" disabled value={count} />
                    <button className="btn btn-outline-dark" onClick={sumar} disabled={stock === 0}>+</button>
                </div>
                <button className="btn btn-primary mt-3" onClick={(e) => onAdd(e, count)} disabled={(stock===0)}>Add to cart</button>
            </div>
        </div>

    );
}
 
export default ItemCount;