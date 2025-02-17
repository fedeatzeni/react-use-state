import languages from "../languages"

import { useState } from 'react';

function Main() {

    // function renderButton(list, content) {
    //   return (
    //     list.map(el => <button key={el.id} onClick={() => { setactivePage(activePage = el.description) }}>{el.title}</button>)
    //   )
    // }

    const [activePage, setaActivePage] = useState("0");

    let active = false

    return (
        <>
            <main>
                {languages.map(el =>
                    < button className={active && "active"}
                        key={el.id}
                        onClick={() => { setaActivePage(el.id - 1) }}>
                        {active = (activePage === (el.id))}

                        {/* contenuto  */}
                        {el.title}
                    </button >)
                }
            </main>

            <div className="info">
                <div className="title">{languages[activePage].title}</div>
                <div className="description">{languages[activePage].description}</div>
            </div>
        </>
    )
}

export default Main