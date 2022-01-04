import React from 'react'
import LibraryItems from './LibraryItems';
import './Sidebar.css';

function Sidebar(props) {
     
    return (
        <div className="sidebar">
            <p>SideBar</p>
            <LibraryItems items={props.libraryItems}/>
            
        </div>
    )
}

export default Sidebar
