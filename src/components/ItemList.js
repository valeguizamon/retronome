import Item from './Item';

const ItemList = ({productos}) => {

    return (
        <div className="row">
            {productos.map((producto, i) => <Item prod={producto} key={i}/>)}
        </div>
    );
}

export default ItemList;