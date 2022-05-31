import "../styles/Logement.css"
import { useEffect, useState } from "react"
import Chevrons from "../components/Chevron"
import Album from "../components/Album"

function Logement() {

    const [housing, setHousing] = useState({})
    const [datas, setDatas] = useState([])
    const [id, setId] = useState("")

    function fetchHousings() {
        fetch("http://localhost:3000/datas.json")
            .then((response) => response.json())
            .then((datas) => {
                setDatas(datas)
            }).catch((error) => {
                console.log("Error", error)
            })
    }

    function getHousing() {
        setHousing(datas.find(data => {
            return data.id === id
        }))
    }

    useEffect(() => {
        setId(new URLSearchParams(window.location.search).get("id"))
        fetchHousings()
    }, [])

    useEffect(() => {
        getHousing()
        document.title = `Kasa - ${housing?.title}`
        // eslint-disable-next-line       
    }, [datas])

    return (
        <div className="logement">
            <div>
                <Album pictures={housing?.pictures} />
                <p>{housing?.title}</p>
                <p>{housing?.location}</p>
                {housing?.tags?.map((tag, index) => {
                    return (
                        <p key={index}>{tag}</p>
                    )
                })}
            </div>
            <div>
                <div>
                    <p>{housing?.host?.name}</p>
                    <img src={housing?.host?.picture} alt="host" />
                </div>
                <p>{housing?.rating}</p>
            </div>
            <section className="value">
                <div className="valueTitle" >
                    <p className="title">Description</p>
                    <Chevrons number="1" />
                </div>
                <p id="valueDescription1" className="valueDescription">{housing?.description}</p>
            </section>
            <section className="value">
                <div className="valueTitle" >
                    <p className="title">Équipements</p>
                    <Chevrons number="2" />
                </div>
                <div id="valueDescription2" className="valueDescription">
                    {housing?.equipments?.map((equipment, index) => {
                        return (
                            <p key={index}>{equipment}</p>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Logement