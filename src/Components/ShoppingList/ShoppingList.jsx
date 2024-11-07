import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import './ShoppingList.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function ShoppingList(){
    const shoppingItems = [
        {id:1 , name: "apple",quantity : 2},
        {id:2 , name: "perfume",quantity: 1}
    ];
    return(
        <>
            <Header/>
            <ToastContainer/>
            <div className="shopping-list">
                <InputItem />
                <ItemList
                    shoppingItem={shoppingItems}
                />
            </div>
        </>
    );
}

export default ShoppingList;