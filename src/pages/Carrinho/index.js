import { useEffect,useState } from "react"
import axios from "axios"
import "./styles.modules.css"

export function Carrinho () {

    const [jerseys,setJerseys]=useState([])
    useEffect(()=>{
    async function fetchJersey(){
        const response = await axios.get("https://ironrest.herokuapp.com/favgeh")
        setJerseys(response.data)
    }
    fetchJersey()
},[])

function removeCart(event){
    console.log(event.target.id)
    axios.delete(`https://ironrest.herokuapp.com/deleteOne/favgeh?img=${event.target.id}`)
    setTimeout(() => window.location.reload(), 500)
}

    const sum = jerseys.reduce((a,b) => {return Number(a) + Number(b.price)} ,0)
    return (
        <div>
        <h2>Carrinho</h2>

            <ul className="carrinho">
                {jerseys.map((jersey)=>{return(

                <li className="cartitem" key={jersey.id}>
                    <img src={require(`../../assets/jerseys/${jersey.img}.png`)} alt='jerseyimg'/>
                    <p className="carttitle">{jersey.title}</p>
                    <p className="price">R$ {jersey.price}</p>
                    <button className="remove" id={jersey.img} onClick={removeCart}>X</button>
                </li>

        )})}
            </ul>

            <div className="total">
                <h2>Total:</h2>
                <h2>R$ {sum}</h2>
            </div>
            </div>
    );
}

