import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./styles.modules.css"



export function Home(){
const [jerseys,setJerseys]=useState([])
useEffect(()=>{
    async function fetchJersey(){
        const response = await axios.get("https://ironrest.herokuapp.com/retrogeh")
        setJerseys(response.data)
    }
    fetchJersey()
    
},[])


    return(
        <div className="home">
            <header className="heroimg">
                <h1>Retro Kits FC</h1>
                <h3>Qual manto você quer vestir hoje ?</h3>
            </header>

            <h2>Nosso mix de clubes para você!</h2>

            <ul className="seleçoes">
                {jerseys.filter((jersey)=>{return jersey.type==='club'}).sort(()=> Math.random() - 0.5).slice(0,5).map((jersey)=>{return(

                <li className="card" key={jersey._id}>
                    <Link to={`/details/${jersey._id}`} >
                    <img src={require(`../../assets/jerseys/${jersey.img}.png`)} alt='jerseyimg'/>
                    </Link>
                    <p className="cardtitle">{jersey.title}</p>
                    <p>R$ {jersey.price}</p>
                    <button className="addcart">Adicionar ao carrinho</button>
                </li>

        )})}
            </ul>

            <h2>Nosso mix de seleções para você!</h2>

            <ul className="seleçoes">
                {jerseys.filter((jersey)=>{return jersey.type==='seleçao'}).sort(()=> Math.random() - 0.5).slice(0,5).map((jersey)=>{return(

                <li className="card" key={jersey._id}>
                <Link to={`/details/${jersey._id}`} >
                <img src={require(`../../assets/jerseys/${jersey.img}.png`)} alt='jerseyimg'/>
                </Link>
                    <div className="imgjersey"></div>
                    <p className="cardtitle">{jersey.title}</p>
                    <p>R$ {jersey.price}</p>
                    <button className="addcart">Adicionar ao carrinho</button>
                </li>

        )})}
            </ul>



        </div>
    )
}