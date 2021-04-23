import './productItem.css';

const ProductItem = (props) => {
    return (
        <div className="product-item">
            <span className="product-item-image">
                <img src={props.img}></img>
            </span>
            <div className="product-item-info">
                <div className="product-item-description">
                    <h2>{props.title}</h2>
                </div>
                <div className="product-item-price">
                    <h2>{props.price}</h2>
                </div>
                <div className="product-item-sale">
                    <h2>{props.sale}</h2>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;