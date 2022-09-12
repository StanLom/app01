import React, {useEffect, useState} from 'react';
import './App.css';
import {NewButton} from "./universal component/Button";

type dataType = {
    body: string
    id: number
    title: string
    userId: number
}

function App() {
    const [data, setData] = useState<Array<dataType>>([])

    const GetMeData = () => {
        setData([])
    }
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
        },[] )
    return (
        <div className="App">
            <NewButton name={'Clean DATA'} callback={GetMeData}/>
            <ul>
                {data.map(d => {
                    return (
                        <li key={d.id}>
                         <span>
                             {d.title}
                         </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
