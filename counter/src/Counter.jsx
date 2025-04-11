import React from 'react'


const Counter = () => {

    // let loader = document.querySelector(".spinner");

    // window.onload = function () 
    // {
    //     setTimeout(() => {
    //         loader.style.opacity = "0"
    //         setTimeout(() => {
    //             loader.style.display = "none"
    //         }, 1000);
    //     }, 3000);    
    // }

    let c = 0;

    function CountInc() {
        c++;
        document.getElementById('num').innerText = c;
    }

    function CountDec() {
        if (c > 0) {
            c--;
            document.getElementById('num').innerText = c;
        }
    }


    return (
        <>

            {/* <div className='spinner'>
                <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
                    <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
                    <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
                    <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                    <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                </svg>
            </div> */}
            
            <div className='mainDiv'>
                <h1 id='num'>0</h1>
                <div className='buttonContainer'>
                    <button id='increment' onClick={CountInc}>+</button>
                    <button id='decrement' onClick={CountDec}>-</button>
                </div>
            </div>
        </>
    )
}

export default Counter
