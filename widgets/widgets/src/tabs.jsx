import React, {useState, useEffect} from 'react';

function Tabs(){
    const [tabs, setTabs] = useState([
        {
            title: "One",
            content: "I am the first"
        },
        {
            title: "Two",
            content: "Second pane here"
        },
        {
            title: "Three",
            content: "Third pane here"
        }
    ]);

    const [selected, setSelected] = useState(0);

    function changeTabs(index){
        setSelected(index);
    }

    return(
        <ul>
            {tabs.map((tab, index) =>{
                return <h1 key = {index} onClick = {() => changeTabs(index)}>{tab.title}</h1>
            })}
            <article>{tabs[selected].content}</article>
        </ul>
    )
}


export default Tabs