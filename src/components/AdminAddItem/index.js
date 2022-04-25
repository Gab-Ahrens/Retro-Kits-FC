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

        axios.post("", form);

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
                id="inputType"
                value={form.type}
                name="type"
                onChange={handleChange}
            />
            <label htmlFor="inputTitle">Title</label>
            <input 
                id="inputTitle"
                value={form.title}
                name="title"
                onChange={handleChange}
            />
            <label htmlFor="inputPrice">Price</label>
            <input 
                id="inputPrice"
                value={form.price}
                name="price"
                onChange={handleChange}               
            />
            <label htmlFor="inputImage">Image</label>
            <input 
                id="inputImage"
                value={form.image}
                name="image"
                onChange={handleChange}
            />
            <label htmlFor="inputDescription">Description</label>
            <input 
                id="inputDescription"
                value={form.description}
                name="description"
                onChange={handleChange}
            />
            <button type="submit">Add Item</button>
        </form>
    );
}