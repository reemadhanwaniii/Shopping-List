import Item from '../Item/Item';
import './ItemList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';

import { showError } from '../Utils/showToasts';
import { ShoppingDispatchContext, ShoppingItemContext } from '../providers/shoppingContext';

function ItemList() {

    const shoppingItem = useContext(ShoppingItemContext);
    const dispatch = useContext(ShoppingDispatchContext)

    return(
        <div className='shopping-item-wrapper'>
            {
                shoppingItem && shoppingItem.map((item) => {
                    return( 
                        <div  key={item.id} className='items-list'>
                            <div className='change-quantity plus'
                                 onClick={() => dispatch({
                                    type: 'increment_item',
                                    itemId: item.id
                                  })}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <Item
                            itemName={item.name}
                            quantity={item.quantity}
                            />
                            <div className='change-quantity minus'
                                 onClick={() => {
                                    if(item.quantity === 1) showError(`${item.name}  removed from list`)
                                        dispatch({
                                            type: "decrement_item",
                                            itemId: item.id
                                        })
                                 }
                                }
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default React.memo(ItemList);