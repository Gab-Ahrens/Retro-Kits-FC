import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"



export function Clubes () {

    const [jerseys,setJerseys]=useState([])
    useEffect(()=>{
    async function fetchJersey(){
        const response = await axios.get("https://ironrest.herokuapp.com/retrogeh")
        setJerseys(response.data)
    }
    fetchJersey()
},[])

    
    return (
        <div>
        <h2>Mantos de Clube</h2>

            <ul className="seleçoes">
                {jerseys.filter((jersey)=>{return jersey.type==='club'}).map((jersey)=>{return(

                <li className="card" key={jersey.id}>
                    <Link to={`/details/${jersey._id}`} >
                    <img src={require(`../../assets/jerseys/${jersey.img}.png`)} alt='jerseyimg'/>
                    </Link>
                    <p className="cardtitle">{jersey.title}</p>
                    <p>R$ {jersey.price}</p>
                    <button className="addcart">Adicionar ao carrinho</button>
                </li>

        )})}
            </ul>
            </div>
    );
}

