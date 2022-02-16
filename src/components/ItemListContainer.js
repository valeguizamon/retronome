import ItemCount from "./itemCount";

function ItemListContainer(props) {
    
    const onAdd = (e, count) =>{
        e.preventDefault();
        console.log("La cantidad de items agregados al carrito es de: " + JSON.stringify(count));
    }

    return (
        <div className="container bg-light text-dark">
            <b>{props.greeting}</b>
            <ItemCount stock={10} valor={1} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;