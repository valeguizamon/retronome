import { useState } from "react";

const ItemCount = ({ stock, value, onAdd }) => {

    const [count, setCount] = useState(value);

    const add = () => {
        setCount((count < stock) ? count + 1 : stock);
    }

    const deduct = () => {
        setCount((count > value) ? count - 1 : value);
    }

    return (


        <>
            <div className="d-flex">
                <button className="btn btn-outline-dark" onClick={deduct} disabled={stock === 0}>-</button>
                <input type="number" className="form-control text-center" disabled value={count} />
                <button className="btn btn-outline-dark" onClick={add} disabled={stock === 0}>+</button>
            </div>
            <div className="d-grid my-2">
                <button className="btn btn-primary" onClick={(e) => onAdd(e, count)} disabled={(stock === 0)}>Agregar al carrito</button>
            </div>
        </>


    );
}

export default ItemCount;