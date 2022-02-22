import { useEffect, useState } from "react";
import datos from "../assets/data/productos.json";

import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {

    useEffect(() => {
        const getAll = new Promise((resolve, reject) => setTimeout(resolve(datos), 2000));
        getAll
            .then(res => setProductos(res))
            .catch(err => console.error(err));
    }, []);

    const [productos, setProductos] = useState([]);

    

    return (
        <div className="">
            <h3 className="text-center display-4">{greeting}</h3>
            <ItemList productos={productos}/>
        </div>
    );
}

export default ItemListContainer;