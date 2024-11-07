import { useReducer  } from "react";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import './ShoppingList.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import itemReducer from "../Reducers/itemReducer";


function ShoppingList(){
    
    const [shoppingItem,dispatch] = useReducer(itemReducer,[]);
  

    const handleAddItem = (name) => {
        dispatch({
            type: 'add_item',
            itemName: name
        })
    }


    const handleAddQuantity = (itemId) => {
      dispatch({
        type: 'increment_item',
        itemId: itemId
      })
    }

    const handleDecQuantity = (itemId) => {
        dispatch({
            type: "decrement_item",
            itemId: itemId
        })
      
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
                    shoppingItem={shoppingItem}
                    addQuantity={handleAddQuantity}
                    decQuantity={handleDecQuantity}
                />
            </div>
        </>
    );
}

export default ShoppingList;