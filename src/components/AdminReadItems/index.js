import axios from "axios";
import { useEffect, useState } from "react";
import { AddItem } from "../AdminAddItem";
import { ChangeItem } from "../AdminChangeItem";
import { DeleteItem } from "../AdminDeleteItem";
import { Navbar } from "../Navbar";
import "./styles.modules.css"



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
            <div className="gerencia">
                <h2>Área de Gerenciamento</h2>
                <div className="additembtn">
                    <AddItem />
                    <hr></hr>
                </div>
                {data.map((currentItem) => { return(
                    <div className="details">
                        <p><b>Time:</b> {currentItem.title}</p>
                        <p><b>Tipo</b>: {currentItem.type}</p>
                        <p><b>Preço:</b> R$ {currentItem.price}</p>
                        <p><b>Imagem:</b> {currentItem.img}</p>
                        <img src={require(`../../assets/jerseys/${currentItem.img}.png`)}/>
                        <p><b>Descrição:</b> {currentItem.description}</p>
                        <div className="adminButtons">
                            <DeleteItem id={currentItem._id} />
                            <ChangeItem id={currentItem} />
                        </div>
                        <hr></hr>
                    </div>
                )
                })}
            </div>
        </div>
    );
}