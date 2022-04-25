import axios from "axios";
import { useState } from "react";



export function AddItem() {
    const [details, setDetails] = useState({
        type: "",
        title: "",
        price: "",
        image: "",
        description: "",
    })

    function handleChange(event) {
        setDetails({ ...details, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post("https://ironrest.herokuapp.com/retrogeh", details);

        setDetails({
            type: "",
            title: "",
            price: "",
            image: "",
            description: "",
        });
    }

    return (
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
                onChange={handleChange}               
            />
            <label htmlFor="inputImage">Image</label>
            <input
                type="text"
                id="inputImage"
                value={details.image}
                name="image"
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
    );
}