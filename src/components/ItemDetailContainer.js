import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import datos from "../assets/data/productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    let { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getOneProduct = (id) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(datos.find(product => product.id === +id), 2000))
            })
        }
        getOneProduct(id)
            .then(resp => {
                setProduct(resp);
            })
            .catch(error => console.error(error));
    }, [id]);

    return (
        <ItemDetail product={product} />

    );
}

export default ItemDetailContainer;