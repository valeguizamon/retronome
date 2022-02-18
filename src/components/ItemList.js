import Item from './Item';

const ItemList = ({productos}) => {
    
    console.log(productos);

    return (
        <div className="card-group d-flex justify-content-around">
            {productos.map((producto, i) => <Item prod={producto} key={i}/>)}
            
        </div>
    );
}

export default ItemList;