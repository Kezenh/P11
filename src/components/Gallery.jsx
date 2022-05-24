import { useEffect, useState } from "react"
import "../styles/Gallery.css"

function Gallery() {

    const [datas, setDatas] = useState(null)

    useEffect(() => {
        async function fetchHousings() {
            // try {
            //     const response = await fetch("http://localhost:3000/datas.json")
            //     const { datas } = await response.json()
            //     setDatas(datas)
            // } catch (err) {
            //     console.log("Error", err)
            // } finally {
            //     console.log(datas)
            // }

            fetch("http://localhost:3000/datas.json").then((response) =>
                response
                    .json()
                    .then(({ datas }) => {
                        console.log(datas)
                        setDatas(datas)
                    })
                    .catch((err) => console.log("Error", err))
            )
        }
        fetchHousings()
        console.log(datas)
        // eslint-disable-next-line
    }, [])

    return (
        <section className="gallery">
            <div className="gradientMask">
                <div className="housing">
                    <p className="locationName">Titre de la <br /> location</p>
                </div>
            </div>
            <div className="gradientMask">
                <div className="housing">
                    <p className="locationName">Titre de la <br /> location</p>
                </div>
            </div>
            <div className="gradientMask">
                <div className="housing">
                    <p className="locationName">Titre de la <br /> location</p>
                </div>
            </div>
            <div className="gradientMask">
                <div className="housing">
                    <p className="locationName">Titre de la <br /> location</p>
                </div>
            </div>
            <div className="gradientMask">
                <div className="housing">
                    <p className="locationName">Titre de la <br /> location</p>
                </div>
            </div>
            <div className="gradientMask">
                <div className="housing">
                    <p className="locationName">Titre de la <br /> location</p>
                </div>
            </div>
        </section>
    )
}

export default Gallery