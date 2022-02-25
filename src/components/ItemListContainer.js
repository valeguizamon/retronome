import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datos from "../assets/data/productos.json";

import ItemList from "./ItemList";

const ItemListContainer = () => {

    const { idCategory } = useParams();

    const [titulo, setTitulo] = useState([])
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        if (idCategory) {
            const getByCategory = new Promise((resolve, reject) => {
                setTimeout(resolve(datos.filter((product) => {
                    return product.idCategory === +idCategory
                })), 2000)
            })
            getByCategory
                .then(res => setProductos(res))
                .catch(err => console.error(err));

            if(+idCategory === 1){
                setTitulo("Juegos");
            } else {
                setTitulo("Consolas")
            }

        } else {
            const getAll = new Promise((resolve, reject) => setTimeout(resolve(datos), 2000));
            getAll
                .then(res => setProductos(res))
                .catch(err => console.error(err));

            setTitulo("Todos nuestros productos")
        }
    }, [idCategory]);





    return (
        <div className="">
            <h3 className="text-center display-4">{titulo}</h3>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;