import ItemListContainer from "../components/ItemListContainer";

function Home(props) {
    return (
        <div class="container">
            <div class="jumbotron">
                <h1 class="display-4">{props.text}</h1>
                <p>El titulo "{props.text}" es enviado como parametro desde App.js y renderizado desde Home.js</p>
                <hr class="my-4" />
                <p class="lead">
                    <ItemListContainer greeting="Saludos, este mensaje fue enviado como parametro desde el componente Home.js y renderizado en ItemListContainer.js"/>
                </p>
            </div>
        </div>
    );
}

export default Home
    ;