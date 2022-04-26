import axios from "axios";
import { useEffect, useState } from "react";
import { AddItem } from "../AdminAddItem";
import { ChangeItem } from "../AdminChangeItem";
import { DeleteItem } from "../AdminDeleteItem";


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
            <h1>List of all items currently for sale</h1>
            <div>
                <AddItem />
                {data.map((currentItem) => {return(
                    <div>
                        <p>Type: {currentItem.type}</p>
                        <p>Title: {currentItem.title}</p>
                        <p>Price: {currentItem.price} $</p>
                        <p>Image: {currentItem.img}</p>
                        <p>description: {currentItem.description}</p>
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