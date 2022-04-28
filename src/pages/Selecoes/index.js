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
    const response = await axios.get(`https://ironrest.herokuapp.com/findOne/retrogeh?img=${event.target.id}`)
    const cartitem = response.data
    console.log(cartitem)
    axios.post("https://ironrest.herokuapp.com/favgeh",cartitem)
    
}

    return (
        <div>
        <h2>Mantos de Seleção</h2>

            <ul className="seleçoes">
                {jerseys.filter((jersey)=>{return jersey.type==='seleçao'}).map((jersey)=>{return(

                <li className="card" key={jersey.id}>
                    <img src={require(`../../assets/jerseys/${jersey.img}.png`)} alt='jerseyimg'/>
                    <p className="cardtitle">{jersey.title}</p>
                    <p>R$ {jersey.price.toFixed(2)}</p>
                    <button className="addcart" id={jersey.img} onClick={addCart}>Adicionar ao carrinho</button>
                </li>

        )})}
            </ul>
            </div>
    );
}

