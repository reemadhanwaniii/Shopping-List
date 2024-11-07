import './InputItem.css';

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
                >
                    Add
                </button>
            </div>
        </>
    );
}

export default InputItem;