import Item from '../Item/Item';
import './ItemList.css'

function ItemList({shoppingItem}) {
    return(
        <div className='shopping-item-wrapper'>
            {
                shoppingItem && shoppingItem.map((item) => {
                    return( 
                        <Item
                            itemName={item.name}
                            quantity={item.quantity}
                            key={item.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList;