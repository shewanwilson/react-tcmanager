import React from 'react';
import LibraryScenario from './LibraryScenario'

function LibraryItems(props) {
    
    
    // Declare and populate array of Library Scenarios
    const itemList = []
        
    props.items.map(item => {
        itemList.push(<LibraryScenario key={item.id} id={item.id} title={item.title}/>);
    })
    
    return (
        
         <ul>
             {itemList}
         </ul>
    )
}

export default LibraryItems
