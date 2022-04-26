import { useEffect,useState } from "react"
import axios from "axios"

export function Carrinho () {

    const [jerseys,setJerseys]=useState([])
    useEffect(()=>{
    async function fetchJersey(){
        const response = await axios.get("https://ironrest.herokuapp.com/favgeh")
        setJerseys(response.data)
    }
    fetchJersey()
},[])
    return (
        <div>
        <h2>Carrinho</h2>

            <ul className="carrinho">
                {jerseys.map((jersey)=>{return(

                <li className="card" key={jersey.id}>
                    <img src={jersey.img} alt='jerseyimg'/>
                    <p>{jersey.title}</p>
                    <p>R$ {jersey.price}</p>
                    <button className="addcart">Adicionar ao carrinho</button>
                </li>

        )})}
            </ul>
            </div>
    );
}

