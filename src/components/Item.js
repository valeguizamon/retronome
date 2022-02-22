import { Link } from 'react-router-dom';
import ItemCount from './itemCount';

const Item = ({prod}) => {
    return (
        <div className="card m-2">
            <img className="card-img-top" src={prod.pictureUrl} alt="..."/>
            <div className="card-body d-grid">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">$ {prod.price}</p>
                <ItemCount stock={20} value={1} />
                <Link className="btn btn-secondary" to={`/detail/${prod.id}`}>View details</Link>
            </div>
        </div>
    );
}

export default Item;