import './InputItem.css';

import { showSuccess } from '../Utils/showToasts';

function InputItem(){
    return(
        <>
            <div className="item-input-wrapper">
                <input
                    className='item-input'
                    type="text"
                    placeholder="Add an Item"
                />
                <button 
                    className='add-item-btn'
                    onClick={() => showSuccess("Successfully added Item")}
                >
                    Add
                </button>
            </div>
        </>
    );
}

export default InputItem;