import React from "react";
import { useNavigate } from 'react-router-dom';
import "../pages/style/page.css"

export default function Home(){

    let example5 = useNavigate();
    let example6 = useNavigate();

    

    return (
        <div className="Home-content">
            <h1>React Accordion</h1>
            <div>
                <h3>The accordion component allows the user to show and hide sections of related content on a page.</h3>
            </div>
            <div>
                <div className="content" onClick={() => {example5("/example5")}}>
                    <h3>Example 1</h3>
                    <p>React Accordion</p>
                </div>
                <div className="content" onClick={() => {example6("/example6")}}>
                    <h3>Example 2</h3>
                    <p>React Accordion with button</p>
                </div>
            </div>
        </div>
    )
}