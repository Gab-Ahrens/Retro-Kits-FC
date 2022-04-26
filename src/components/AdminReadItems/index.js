import axios from "axios";
import { useEffect, useState } from "react";
import { AddItem } from "../AdminAddItem";
import { ChangeItem } from "../AdminChangeItem";
import { DeleteItem } from "../AdminDeleteItem";
import { Navbar } from "../Navbar";



export function ReadItems() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchItems() {
            const response = await axios.get (
                "https://ironrest.herokuapp.com/retrogeh"
            );
            setData(response.data);
        }
        fetchItems();
    }, [])


    return (
        <div>
            <div>
                <h2>Área de Gerenciamento</h2>
                <AddItem />
                {data.map((currentItem) => { return(
                    <div>
                        <p>Tipo: {currentItem.type}</p>
                        <p>Título: {currentItem.title}</p>
                        <p>Preço: R$ {currentItem.price}</p>
                        <p>Imagem: {currentItem.img}</p>
                        {/* <img src={require(`../../assets/clubes/${currentItem.img}.png`)}/> */}
                        <p>Descrição: {currentItem.description}</p>
                        <div className="adminButtons">
                            <DeleteItem id={currentItem._id} />
                            <ChangeItem id={currentItem} />
                        </div>
                    </div>
                )
                })}
            </div>
        </div>
    );
}