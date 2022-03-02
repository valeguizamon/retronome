import { useState } from "react";

const ItemCount = ({ stock, value, onAdd }) => {

    const [count, setCount] = useState(value);

    const sumar = () => {
        setCount((count < stock) ? count + 1 : stock);
    }

    const restar = () => {
        setCount((count > value) ? count - 1 : value);
    }

    return (


        <>
            <div className="d-flex">
                <button className="btn btn-outline-dark" onClick={restar} disabled={stock === 0}>-</button>
                <input type="number" className="form-control text-center" disabled value={count} />
                <button className="btn btn-outline-dark" onClick={sumar} disabled={stock === 0}>+</button>
            </div>
            <div className="d-grid my-2">
                <button className="btn btn-primary" onClick={(e) => onAdd(e, count)} disabled={(stock === 0)}>Add to cart</button>
            </div>
        </>


    );
}

export default ItemCount;