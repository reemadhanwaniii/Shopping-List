import './InputItem.css';

import { showError, showSuccess } from '../Utils/showToasts';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';


function InputItem({addItem}){

   
    const { register, handleSubmit, formState: { errors }} = useForm(); 

    const handleSubmission = (data) => {
        // e.preventDefault();
        // addItem(itemName);
        // setItemName("");
        addItem(data.item)
        showSuccess("Successfully added Item");
    }

    useEffect(()=>{
        if(errors.item && errors.item.type === 'required'){
            showError("Item cannot be empty");
        }
        if(errors.item && errors.item.type === 'minLength'){
            showError("Item cannot be less than 3 length");
        }
    },[errors.item && errors.item.type])

    return(
        <>
            <div className="item-input-wrapper">
                <form onSubmit={handleSubmit(handleSubmission)}>
                    <input
                        className='item-input'
                        type="text"
                        placeholder="Add an Item"
                        {...register("item",{ required: true, minLength: 3 })}
                    />
                    
                    <button 
                        className='add-item-btn'
                    >
                        Add
                    </button>
               </form>
               {/* <div>
                        {errors.item && errors.item.type === "required" && <p>Item is missing</p>}
                        {errors.item && errors.item.type === "minLength" && <p>Item length cannot be less than 3</p>}
                </div> */}
            </div>
        </>
    );
}

export default InputItem;