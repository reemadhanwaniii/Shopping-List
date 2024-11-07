import Item from '../Item/Item';
import './ItemList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function ItemList({shoppingItem}) {
    return(
        <div className='shopping-item-wrapper'>
            {
                shoppingItem && shoppingItem.map((item) => {
                    return( 
                        <div  key={item.id} className='items-list'>
                            <div className='change-quantity plus'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <Item
                            itemName={item.name}
                            quantity={item.quantity}
                            />
                            <div className='change-quantity minus'>
                              <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default ItemList;