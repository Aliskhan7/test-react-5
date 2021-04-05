
import {useState} from "react";


function Detective(){
    const [sherlock, setSherlock] = useState('heeloy');

    const handleClick = () => {
        setSherlock('высокоактивный социопат')
    }
    return(
        <div>
            <h1>Шерлок - {sherlock}</h1>
            <div>
                <button onClick={handleClick}>
                    узнать правду
                </button>
            </div>
        </div>

    )
}

export default Detective;