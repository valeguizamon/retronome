import { Fragment, useState } from "react";

function ItemCount(props) {

    const [count, setCount] = useState(props.valor);

    const agregar = () => {
        setCount((count < props.stock) ? count + 1 : props.stock);
    }

    const quitar = () => {
        setCount((count > props.valor) ? count - 1 : props.valor);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Contador</h5>
                <div className="d-flex">
                    <button className="btn btn-outline-dark" onClick={quitar} disabled={props.stock === 0}>-</button>
                    <input type="number" className="form-control text-center" disabled value={count} />
                    <button className="btn btn-outline-dark" onClick={agregar} disabled={props.stock === 0}>+</button>
                    
                </div>
                <button className="btn btn-primary mt-3" onClick={(e) => props.onAdd(e, count)} disabled={(props.stock===0)}>Add to cart</button>
            </div>
        </div>
    );
}

export default ItemCount;