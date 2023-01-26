import React from "react";
import './Sidebar.css';

function Sidebar(){
    return(
        <div class="sidebar">
            <div class="name">
                <h2 class="comname"><span>Dev</span>challenges.io</h2>
            </div>

            <div class="sideattributes">
                <ul>
                        <li><a href="#">Colors</a></li>
                        <li><a href="#">Typography</a></li>
                        <li><a href="#">Spaces</a></li>
                        <li><a href="#">Buttons</a></li>
                        <li><a href="#">Inputs</a></li>
                        <li><a href="#">Grid</a></li>
                </ul>
            </div>

        </div>
    );
}

export default Sidebar;