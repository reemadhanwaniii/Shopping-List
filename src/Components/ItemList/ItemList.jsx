import Item from '../Item/Item';
import './ItemList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

import { showError } from '../Utils/showToasts';

function ItemList({shoppingItem,addQuantity,decQuantity}) {
    return(
        <div className='shopping-item-wrapper'>
            {
                shoppingItem && shoppingItem.map((item) => {
                    return( 
                        <div  key={item.id} className='items-list'>
                            <div className='change-quantity plus'
                                 onClick={() => addQuantity(item.id)}
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
                                    decQuantity(item.id)
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