import "../ct11/css/codingtool.css"
import "../ct11/css/icd_style.css"
import "../ct11/css/my_style.css"
import React, { useEffect } from 'react';

const ChallengeComponet = ({ selectedItem }) => {

    useEffect(() => {
        const handleClick = (event) => {
            const clipboard = document.getElementsByClassName("clipboard");
            if (clipboard.length > 0) {
                // alert(clipboard[0].innerHTML + clipboard[0].title);
                console.log(clipboard[0].innerHTML);
                console.log(clipboard[0].title);

                selectedItem(clipboard[0].title);
            }
            /*
            console.log( "Clic détecté à l'emplacement :", event.clientX, event.clientY
            );
            console.log("Élément ciblé :", event.target);
            */
        };

        // Add the click event listener when the component mounts
        document.addEventListener("click", handleClick);

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (<>
        <div class="rigth-side">
            <main role="main">
                <div class="body-content">
                    <div class="container">
                        <div class="placeholder"></div>
                        <div class="search-jumbotron">
                            <span class="working hide" id="loading-gif">
                                <img src="/ct11/img/loading.gif" />
                            </span>
                            <input
                                id="searchbox"
                                type="text"
                                placeholder="Type for starting the search"
                                autocomplete="off"
                                class="ctw-input"
                                data-ctw-ino="1"
                                disabled
                            />
                            <span class="clear" onclick="ECT.Handler.clear('1');"
                            >❌
                            </span>
                        </div>
                        <div class="ctw-window" data-ctw-ino="1"></div>
                    </div>
                </div>
            </main>

        </div>
    </>);
}

export default ChallengeComponet