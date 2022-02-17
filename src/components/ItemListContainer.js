import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    
    return (
        <div className="container bg-secondary">
            <h3 className="text-center">{greeting}</h3>
            <ItemCount stock={20} value={1}/>

        </div>
    );
}
 
export default ItemListContainer;