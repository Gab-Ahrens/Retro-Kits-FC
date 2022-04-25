import axios from "axios";
import { useEffect, useState } from "react";


export function ChangeItem(props) {
    // const params = useParams();

    console.log(props);
    const [details, setDetails] = useState({
        type: props.id.type,
        title: props.id.title,
        price: props.id.price,
        image: props.id.image,
        description: props.id.description,
    });


    function handleChange(event) {
        console.log(event.target.value)
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
                id="inputTitle"
                value={details.title}
                name="title"
                onChange={handleChange}
            />
            <label htmlFor="inputPrice">Price</label>
            <input 
                id="inputPrice"
                value={details.price}
                name="price"
                onChange={handleChange}               
            />
            <label htmlFor="inputImage">Image</label>
            <input 
                id="inputImage"
                value={details.image}
                name="image"
                onChange={handleChange}
            />
            <label htmlFor="inputDescription">Description</label>
            <input 
                id="inputDescription"
                value={details.description}
                name="description"
                onChange={handleChange}
            />
            <button type="submit">Change Item</button>
        </form>


    );
}