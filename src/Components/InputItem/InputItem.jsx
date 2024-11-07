import './InputItem.css';

import { showSuccess } from '../Utils/showToasts';
import { useState } from 'react';


function InputItem({addItem}){

    const [itemName,setItemName] = useState('')

    return(
        <>
            <div className="item-input-wrapper">
                <input
                    className='item-input'
                    type="text"
                    placeholder="Add an Item"
                    value={itemName}
                    onChange={(e)=>setItemName(e.target.value)}
                />
                <button 
                    className='add-item-btn'
                    onClick={() => {
                        showSuccess("Successfully added Item");
                        addItem(itemName);
                        setItemName("");
                    }}
                >
                    Add
                </button>
            </div>
        </>
    );
}

export default InputItem;