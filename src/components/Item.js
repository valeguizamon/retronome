import ItemCount from './itemCount';

const Item = ({prod}) => {
    return (
        <div className="card m-2">
            <img className="card-img-top" src={prod.pictureUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">$ {prod.price}</p>
                <ItemCount stock={20} value={1} />
            </div>
        </div>
    );
}

export default Item;