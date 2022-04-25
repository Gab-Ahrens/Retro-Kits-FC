import axios from "axios";
import { useState } from "react";



export function AddItem() {
    const [form, setForm] = useState({
        type: "",
        title: "",
        price: "",
        image: "",
        description: "",
    })

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post("", form);

        setForm({
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
            <input 
                id="inputTitle"
                value={form.title}
                name="title"
                onChange={handleChange}
            />
            <input 
                id="inputPrice"
                value={form.price}
                name="price"
                onChange={handleChange}               
            />
            <input 
                id="inputImage"
                value={form.image}
                name="image"
                onChange={handleChange}
            />
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