import { useState } from "react";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import './ShoppingList.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';


function ShoppingList(){
    const [shoppingItems,setShoppingItems] = useState([]);

    const handleAddItem = (itemName) => {
        setShoppingItems([...shoppingItems,{id:uuidv4(),name: itemName,quantity: 1}])
    }


    const handleAddQuantity = (itemId) => {
        const newShoppingItems = shoppingItems.map((item)=>{
            if(item.id === itemId) item.quantity++;
            return item;
        });
        setShoppingItems(newShoppingItems);
    }

    const handleDecQuantity = (itemId) => {
        let newShoppingItems = shoppingItems.map((item)=>{
            if(item.id === itemId && item.quantity > 0) item.quantity--;
            return item;
        });
        newShoppingItems = newShoppingItems.filter(item => item.quantity > 0)
        setShoppingItems(newShoppingItems);
    }

    return(
        <>
            <Header/>
            <ToastContainer/>
            <div className="shopping-list">
                <InputItem 
                    addItem={handleAddItem}
                />
                <ItemList
                    shoppingItem={shoppingItems}
                    addQuantity={handleAddQuantity}
                    decQuantity={handleDecQuantity}
                />
            </div>
        </>
    );
}

export default ShoppingList;