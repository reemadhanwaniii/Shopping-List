// contains our core logic that we want to seggregate out

import { v4 as uuidv4 } from 'uuid';

function itemReducer(shoppingItems,action){ // action -> {type: 'add_item'}
    if(action.type === "add_item"){
        return [...shoppingItems,{id:uuidv4(),name: action.itemName,quantity: 1}]
    }else if(action.type === "increment_item"){
            const newShoppingItems = shoppingItems.map((item)=>{
            if(item.id === action.itemId) item.quantity++;
            return item;
        });
        return newShoppingItems
    } else if(action.type === 'decrement_item') {
        let newShoppingItems = shoppingItems.map((item)=>{
            if(item.id === action.itemId && item.quantity > 0) item.quantity--;
            return item;
        });
        newShoppingItems = newShoppingItems.filter(item => item.quantity > 0)
        return newShoppingItems;
    }
}

export default itemReducer;