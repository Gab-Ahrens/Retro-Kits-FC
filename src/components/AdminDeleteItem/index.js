import axios from "axios";


export function DeleteItem() {

    function handleDelete() {
        axios.delete(`LINK HERE`)
    }

    return(
        <button onClick={handleDelete}>Delete Item</button>
    );
}