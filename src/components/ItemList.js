import Item from './Item';

const ItemList = ({products}) => {

    return (
        <div className="row">
            {products.map((product, i) => <Item prod={product} key={i}/>)}
        </div>
    );
}

export default ItemList;