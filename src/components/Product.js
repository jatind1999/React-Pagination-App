export const Product = ({title, description, category, price, rating, thumbnail}) => {
    
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={thumbnail}></img>
            </div>
            <strong>{title}</strong>
            <i>{description}</i>
            <br />
            <span>{category}</span>
            <span>{price}</span>
            <span>{rating}</span>
        </div>
    );
};