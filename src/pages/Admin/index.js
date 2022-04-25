import { ReadItems } from "../../components/AdminReadItems";
import { Navbar } from "../../components/Navbar";


export function AdminPage() {
    return (
        <div>
            <Navbar />
            <h1>Página do Admin</h1>
            <ReadItems />
        </div>

    );
}