import languages from "../languages"

import { useState } from 'react';

function Main() {

    // function renderButton(list, content) {
    //   return (
    //     list.map(el => <button key={el.id} onClick={() => { setactivePage(activePage = el.description) }}>{el.title}</button>)
    //   )
    // }

    const [activePage, setaActivePage] = useState("0");

    return (
        <>
            {languages.map(el =>
                <button
                    key={el.id}
                    onClick={() => { setaActivePage(el.id - 1) }}>

                    {/* contenuto  */}
                    {el.title}
                </button>)}

            <div>
                <div className="title">{languages[activePage].title}</div>
                <div className="description">{languages[activePage].description}</div>
            </div>
        </>
    )
}

export default Main