import languages from "../languages"

import { useState } from 'react';

function Main() {

    // function renderButton(list, content) {
    //   return (
    //     list.map(el => <button key={el.id} onClick={() => { setactivePage(activePage = el.description) }}>{el.title}</button>)
    //   )
    // }

    const [activePage, setactivePage] = useState("");

    return (
        <>
            {languages.map(el =>
                <button
                    key={el.id}
                    onClick={() => { setactivePage(activePage = el.description) }}>

                    {/* contenuto  */}
                    {el.title}
                </button>)}

            <div className="description">{activePage}</div>
        </>
    )
}

export default Main