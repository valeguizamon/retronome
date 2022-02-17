import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
    
    return ( 
        <div className="container jumbotron mt-3">
            <h1 className="display-4">retronome</h1>
            <p className="lead">Aqui podras conseguir tus juegos y consolas retro</p>
            <p>Esperamos que encuentres lo que estas buscando</p>
            <hr className="my-4" />
            <ItemListContainer greeting="Lista de Proudctos"/>
        </div>
    );

}
 
export default Home;