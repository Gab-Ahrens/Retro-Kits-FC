import axios from "axios";
import { useState } from "react";



export function AddItem() {

    const [addOpen, setaddOpen] = useState(false)

    const [details, setDetails] = useState({
        type: "",
        title: "",
        price: 0,
        img: "",
        description: "",
    })

    function addOpenhandleClick() {
        setaddOpen(true);
    }

    function handleChange(event) {
        setDetails({ ...details, [event.target.name]: event.target.value });
        console.log(details)
    }

    function handleNumbers(event) {
        const number = parseInt(event.target.value)
        setDetails({ ...details, [event.target.name]: number });
        console.log(details)
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post("https://ironrest.herokuapp.com/retrogeh", details);

        setDetails({
            type: "",
            title: "",
            price: 0,
            img: "",
            description: "",
        });

        setaddOpen(false)

        setTimeout(() => window.location.reload(), 500)
    }

    return (
        <div>
            <button onClick={addOpenhandleClick}>Adicionar Novo Item</button>
            <dialog open={addOpen}>
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
                        type="number"
                        id="inputPrice"
                        value={details.price}
                        name="price"
                        onChange={handleNumbers}               
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
                    <button type="submit">Add Item</button>
                </form>
            </dialog>
        </div>
    );
}