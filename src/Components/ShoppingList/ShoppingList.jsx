import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import './ShoppingList.css'

function ShoppingList(){
    return(
        <>
            <Header/>
            <div className="shopping-list">
                <InputItem />
            </div>
        </>
    );
}

export default ShoppingList;