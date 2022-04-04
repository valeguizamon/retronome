import { Link } from 'react-router-dom';
import "../assets/css/item.css";

const Item = ({ prod }) => {

    return (
        <div className="col-sm-3 ">
            <div id="item-card" className="card shadow m-3">
                <img className="card-img-top" src={prod.pictureUrl} alt="product"/>
                <div className="card-body d-grid">
                    <h6 className="card-title">{prod.title}</h6>
                    <p className="float-end">$ {prod.price}</p>
                    <Link className="btn btn-secondary shadow" to={`/detail/${prod.id}`}>Detalle</Link>
                </div>
            </div>
        </div>
    );
}

export default Item;