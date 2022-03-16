import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//import datos from "../assets/data/productos.json";

import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../services/firebase";

import ItemList from "./ItemList";

const ItemListContainer = () => {

    const { idCategory } = useParams();

    const [titulo, setTitulo] = useState([])
    const [productos, setProductos] = useState([]);

    // useEffect(() => {
    //     if (idCategory) {
    //         const getByCategory = new Promise((resolve, reject) => {
    //             setTimeout(resolve(datos.filter((product) => {
    //                 return product.idCategory === +idCategory
    //             })), 2000)
    //         })
    //         getByCategory
    //             .then(res => setProductos(res))
    //             .catch(err => console.error(err));

    //         if(+idCategory === 1){
    //             setTitulo("Juegos");
    //         } else {
    //             setTitulo("Consolas")
    //         }

    //     } else {
    //         const getAll = new Promise((resolve, reject) => setTimeout(resolve(datos), 2000));
    //         getAll
    //             .then(res => setProductos(res))
    //             .catch(err => console.error(err));

    //         setTitulo("Todos nuestros productos")
    //     }
    // }, [idCategory]);

    const getData = async () => {
        try {
            const itemsCollection = collection(db, "items");
            const col = await getDocs(itemsCollection);
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setProductos(result);
        } catch (error) {
            console.warn("error: " + error);
        }
    }

    const getByCategory = async(idCat) =>{
        try{
            const itemsCollection = collection(db,"items");
            const q = query(itemsCollection, where("idCategory", "==", idCat));
            const col = await getDocs(q);
            console.log("ASD",col.docs.map((doc)=> doc = {id: doc.id, ...doc.data()}));
            return col.docs.map((doc)=> doc = {id: doc.id, ...doc.data()}); 
        } catch(error){
            console.warn(error);
        }
    }

    useEffect(() => {
        if (idCategory) {
            getByCategory(+idCategory)
            
                .then(res => {setProductos(res)
                    console.log(res)})
                .catch(err => console.error(err));

            if (+idCategory === 1) {
                setTitulo("Juegos");
            } else {
                setTitulo("Consolas")
            }
        } else {
            getData()
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