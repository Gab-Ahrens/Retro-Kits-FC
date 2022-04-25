import axios from "axios";



export function DeleteItem(props) {



    function handleDelete() {
        console.log("Deletou", props.id)
        axios.delete(`https://ironrest.herokuapp.com/retrogeh/${props.id}`)
        // window.href="/";
    }

    return(
        <button onClick={handleDelete}>Delete Item</button>
    );
}