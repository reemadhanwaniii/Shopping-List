import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import './ShoppingList.css'

function ShoppingList(){
    const shoppingItems = [
        {id:1 , name: "apple",quantity : 2},
        {id:2 , name: "perfume",quantity: 1}
    ];
    return(
        <>
            <Header/>
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