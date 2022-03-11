import { Link } from 'react-router-dom';
import ItemCount from './itemCount';

const Item = ({ prod }) => {

    return (
        <div className="col-sm-3 d-flex">
            <div className="card m-3 flex-fill">
                <img className="card-img-top" src={prod.pictureUrl} alt="..." />
                <div className="card-body d-grid">
                    <h6 className="card-title">{prod.title}</h6>
                    <p className="float-end">$ {prod.price}</p>
                    <Link className="btn btn-secondary" to={`/detail/${prod.id}`}>View details</Link>
                </div>
            </div>
        </div>
    );

}

export default Item;