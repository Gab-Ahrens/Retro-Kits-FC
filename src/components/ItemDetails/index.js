import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            <div>
                <div>
                    <h2>{data.title}</h2>
                </div>            
                <div>
                    {!isLoading ? <img src={require(`../../assets/jerseys/${data.img}.png`)}/> : <p>Imagem carregando...</p>}
                </div>
            </div>
            <div>
                <p><b>Preço:</b> R$ {data.price}</p>
                <p><b>Descrição:</b> {data.description}</p>
            </div>
        </div>
    );
}