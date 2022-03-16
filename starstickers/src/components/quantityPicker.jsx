import './quantityPicker.css';
import {useState} from 'react';

const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if(quantity>0)
            setQuantity(quantity-1);
    }

    const handleIncrease = () => {
        setQuantity(quantity+1);
    }

    return (<div className='quantityPicker'>
            <button className="btn btn-success btn-sm" onClick={handleDecrease}>-</button>
            <label> {quantity} </label>
            <button className="btn btn-success btn-sm" onClick={handleIncrease}>+</button>
            </div>);
};

export default QuantityPicker;