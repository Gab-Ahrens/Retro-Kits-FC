import axios from "axios";
import { useEffect, useState } from "react";


export function ChangeItem(props) {

    const [details, setDetails] = useState({
        type: props.id.type,
        title: props.id.title,
        price: props.id.price,
        img: props.id.img,
        description: props.id.description,
    });
    // console.log(details.img)


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

        setTimeout(() => window.location.reload(), 500)
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


    );
}