import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../services/firebase";

import ItemList from "./ItemList";

const ItemListContainer = () => {

    const { idCategory } = useParams();

    const [title, setTitle] = useState([])
    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            const itemsCollection = collection(db, "items");
            const col = await getDocs(itemsCollection);
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setProducts(result);
        } catch (error) {
            console.warn("error: " + error);
        }
    }

    const getByCategory = async(idCat) =>{
        try{
            const itemsCollection = collection(db,"items");
            const q = query(itemsCollection, where("idCategory", "==", idCat));
            const col = await getDocs(q);
            return col.docs.map((doc)=> doc = {id: doc.id, ...doc.data()}); 
        } catch(error){
            console.warn(error);
        }
    }

    useEffect(() => {
        if (idCategory) {
            getByCategory(+idCategory)
            
                .then(res => {setProducts(res)})
                .catch(err => console.error(err));

            if (+idCategory === 1) {
                setTitle("Juegos");
            } else {
                setTitle("Consolas")
            }
        } else {
            getData()
            setTitle("Todos nuestros productos")
        }

    }, [idCategory]);


    return (
        <div className="">
            <h3 className="text-center">{title}</h3>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;