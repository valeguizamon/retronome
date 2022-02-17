const Error404 = () => {
    return (
        <div className="container jumbotron mt-3">
            <h1 className="display-4">error 404</h1>
            <hr className="my-4" />
            <p>La pagina que buscas no existe o esta en mantenimiento</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/" role="button">Volver a Inicio</a>
            </p>
        </div>
      );
}
 
export default Error404;