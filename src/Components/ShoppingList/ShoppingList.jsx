import { useReducer  } from "react";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import './ShoppingList.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import itemReducer from "../Reducers/itemReducer";
import {ShoppingItemContext,ShoppingDispatchContext} from "../providers/shoppingContext";

function ShoppingList(){
    
    const [shoppingItem,dispatch] = useReducer(itemReducer,[]);
   

    return(
        <>
        <ShoppingItemContext.Provider value={shoppingItem}>
            <ShoppingDispatchContext.Provider value={dispatch}>
                <Header/>
                <ToastContainer/>
                <div className="shopping-list">
                    <InputItem />
                    <ItemList/>
                </div>
            </ShoppingDispatchContext.Provider>
        </ShoppingItemContext.Provider> 
        </>
    );
}

export default ShoppingList;