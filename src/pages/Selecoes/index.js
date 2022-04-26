import { useEffect,useState } from "react"
import axios from "axios"

export function Selecoes () {

    const [jerseys,setJerseys]=useState([])
    useEffect(()=>{
    async function fetchJersey(){
        const response = await axios.get("https://ironrest.herokuapp.com/retrogeh")
        setJerseys(response.data)
    }
    fetchJersey()
},[])

async function addCart(event){
    const cartitem = await axios.get(`https://ironrest.herokuapp.com/retrogeh/${event.target.name}`)
    console.log(event.target)
    console.log(cartitem.data)
}

    return (
        <div>
        <h2>Mantos de Seleção</h2>

            <ul className="seleçoes">
                {jerseys.filter((jersey)=>{return jersey.type==='seleçao'}).map((jersey)=>{return(

                <li className="card" key={jersey.id}>
                    <img src={require(`../../assets/jerseys/${jersey.img}.png`)} alt='jerseyimg'/>
                    <p className="cardtitle">{jersey.title}</p>
                    <p>R$ {jersey.price}</p>
                    <button className="addcart" name={jersey.id} onClick={addCart}>Adicionar ao carrinho</button>
                </li>

        )})}
            </ul>
            </div>
    );
}

