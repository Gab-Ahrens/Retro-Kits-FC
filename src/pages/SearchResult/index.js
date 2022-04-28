import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export function SearchResult() {

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

    const params = useParams()
    console.log(params.searchresults)

    return (
    <div>
        <h2>Resultados de busca</h2>
        
        <ul className="seleçoes">

        {jerseys.filter((jersey)=>{return jersey.title.includes(params.searchresults)}).map((jersey)=>{return(

        <li className="card" key={jersey.id}>
            <Link to={`/details/${jersey._id}`} >
            <img src={require(`../../assets/jerseys/${jersey.img}.png`)} alt='jerseyimg'/>
            </Link>
            <p className="cardtitle">{jersey.title}</p>
            <p>R$ {jersey.price.toFixed(2)}</p>
            <button className="addcart" id={jersey.img} onClick={addCart}>Adicionar ao carrinho</button>
        </li>

        )})}

        </ul>

    </div>
    );
}