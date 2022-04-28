import axios from "axios";
import { useEffect, useState } from "react";
import Zoom from "react-img-zoom";
import { useParams } from "react-router-dom";
import "./styles.modules.css"


export function ShowItemDetails() {

    const {id} = useParams();
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        async function fetchItems() {
            const response = await axios.get (
                `https://ironrest.herokuapp.com/retrogeh/${id}`
            );
            setData(response.data);
            setisLoading(false);
        }
        fetchItems();
        
    },[])

    return (
    <div>
        <div className="detailsMain">
            <section className="itemName">
                <h2>{data.title}</h2>
            </section>

            <section className="container">
                
                <span className="itemImg">
                    {/* {!isLoading ? <img src={require(`../../assets/jerseys/${data.img}.png`)}/> : <p>Imagem carregando...</p>} */}
                    {!isLoading ?
                    <Zoom
                        img={require(`../../assets/jerseys/${data.img}.png`)}
                        zoomScale={2}
                        width={500}
                        height={600}                
                    />                     
                    : <p>Imagem carregando...</p>}
                </span>
                
                <span className="itemInfo">
                    <p><b>Preço:</b> R$ {data.price}</p>
                    <p><b>Descrição:</b> {data.description}</p>
                </span>
                <span>
                    <button className="addtocart">Adicionar ao carrinho</button>
                </span>

            </section>
        </div>

    </div>
    );
}