import "../styles/Album.css"
import { useState, useEffect } from "react"

function Album({ pictures }) {

    function chevronRight() {
        if (picturesLength - 1 === pictureIndex) {
            setPictureIndex(0)
        } else {
            setPictureIndex(pictureIndex + 1)
        }
    }

    function chevronLeft() {
        if (pictureIndex === 0) {
            setPictureIndex(picturesLength - 1)
        } else {
            setPictureIndex(pictureIndex - 1)
        }
    }

    const [picture, setPicture] = useState("")
    const [pictureIndex, setPictureIndex] = useState(0)
    const [displayNone, setDisplayChevrons] = useState(" displayNone")
    const [picturesLength, setPicturesLength] = useState(0)

    useEffect(() => {
        if (pictures) {
            setPicturesLength(pictures.length)
            setPicture(pictures[pictureIndex])
            if (pictures.length > 1) {
                setDisplayChevrons("")
            }
        }
    }, [pictures, pictureIndex])

    return (
        <div className="album">
            <img className="housingImg" src={picture} alt={`housing ${pictureIndex + 1}`} />
            <svg className={`chevronRight${displayNone}`} onClick={chevronRight} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" /></svg>
            <svg className={`chevronLeft${displayNone}`} onClick={chevronLeft} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" /></svg>
            <p className={`counter${displayNone}`}>{`${pictureIndex + 1}/${picturesLength}`}</p>
        </div>
    )
}

export default Album