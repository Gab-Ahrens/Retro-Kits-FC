import axios from "axios";
import { useEffect, useState } from "react";


export function ChangeItem(props) {

    const [dialogChangeItem, setdialogChangeItem] = useState(false)

    const [details, setDetails] = useState({
        type: props.id.type,
        title: props.id.title,
        price: props.id.price,
        img: props.id.img,
        description: props.id.description,
    });

    function dialogHandleclick() {
        setdialogChangeItem(true);
    }

    function handleChange(event) {
        setDetails({ ...details, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const editObject = { ...details };

        axios.put(
            `https://ironrest.herokuapp.com/retrogeh/${props.id._id}`,
            editObject
        );
        
        setDetails({
            type: "",
            title: "",
            price: "",
            img: "",
            description: "",           
        });

        setdialogChangeItem(false)

        setTimeout(() => window.location.reload(), 500)
    }

    return (
        <div>
            <button onClick={dialogHandleclick}>Modificar Item</button>
            <dialog open={dialogChangeItem} >
                <form onSubmit={handleSubmit}>
                    <label htmlFor="inputType">Type</label>
                    <input
                        type="text"
                        id="inputType"
                        value={details.type}
                        name="type"
                        onChange={handleChange}
                    />
                    <label htmlFor="inputTitle">Title</label>
                    <input
                        type="text"
                        id="inputTitle"
                        value={details.title}
                        name="title"
                        onChange={handleChange}
                    />
                    <label htmlFor="inputPrice">Price</label>
                    <input
                        type="text"
                        id="inputPrice"
                        value={details.price}
                        name="price"
                        onChange={handleChange}               
                    />
                    <label htmlFor="inputImg">Image</label>
                    <input
                        type="text"
                        id="inputImg"
                        value={details.img}
                        name="img"
                        onChange={handleChange}
                    />
                    <label htmlFor="inputDescription">Description</label>
                    <input
                        type="text"
                        id="inputDescription"
                        value={details.description}
                        name="description"
                        onChange={handleChange}
                    />
                    <button type="submit">Change Item</button>
                </form>
            </dialog>
        </div>


    );
}