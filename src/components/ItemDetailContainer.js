import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    let { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getOneProduct = async(id) => {
            try{
                const item = doc(getFirestore(), "items", id);
                const resp = await getDoc(item);
                return {id:resp.id, ...resp.data()};
            } catch(error) {
                console.error("error", error);
            }
            
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