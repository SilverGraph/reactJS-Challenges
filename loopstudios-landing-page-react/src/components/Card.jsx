import React, {useState, useRef, useEffect} from "react"
import {image} from "../images"

export default function Card() {
    const main = useRef(null);
    const bannerText = useRef(null)
    const [dir, setDir] = useState("")

    useEffect(() => {
        const displayWidth = main.current.getBoundingClientRect().width;

        console.log(bannerText.current.getBoundingClientRect());

        if (displayWidth <= 376) {
            setDir("mobile");
            // console.log(dir);
        } else {
            setDir("desktop");
        }
    }, [dir]);

    
function desktopImages() {
    return (
        <div id="cards-div">
            {image.map((obj) => {
                return (
                    <div key={obj.key} className="image-container">
                        <img src={`../../images/${dir}/image-${obj.name}.jpg`} alt="" />
                        <h1 ref={bannerText}>{obj.banner}</h1>
                    </div>
                )
            })}
        </div>
    )
}

    return (
        <div className="cards-main-div" ref={main}>

            <nav>
                <h1>OUR CREATIONS</h1>
                <button>SEE ALL</button>
            </nav>

            <div className="cards-container">
                {desktopImages()}
            </div>
            
        </div>
    )
}