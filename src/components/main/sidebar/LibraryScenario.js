import React from 'react'
import { useDrag } from "react-dnd";

function LibraryScenario(props) {
    
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "li",
        item: {id: props.id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    //   
    return (
        
            <li id={props.id} ref={dragRef}>{props.title}</li>
            
    )


}

export default LibraryScenario