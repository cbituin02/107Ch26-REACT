import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {
    return (<div className='product'>
            <img src="https://picsum.photos/200/300" alt="product img"></img>
            <h2> {props.title} </h2>
            <h3 className='price'> ${props.price} </h3>
            <h4 className='stock'> {props.stock} left </h4>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-outline-success btn-sm">Add</button>
            </div>);
}

export default Product;