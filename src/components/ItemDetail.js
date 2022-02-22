import ItemCount from "./itemCount";

const ItemDetail = ({ product }) => {

    return (
        <div className="container mt-5" id="product-detail">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={product.pictureUrl} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <div className="product-info">
                        <h1>{product.title}</h1>
                        <h3>${product.price}</h3>
                        <hr />
                        <p>{product.description}</p>
                        <ItemCount stock={20} value={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;