import { useState } from "react";
import { ReadItems } from "../../components/AdminReadItems";
import "./styles.modules.css"



export function AdminPage() {

    const usuario= 'admin'
    const senha = 'retrokits'
    const [user, setUser] = useState('')
    const [password, setPassword] = useState ('')
    const [classe, setClasse] = useState("hidden")
    const [classeform, setClasseForm] = useState('form')

    function handleClick(){
        if( user === usuario && password === senha) {
            setClasse('')
            setClasseForm('hidden')
        }
    }

    return (
        <div className="isAdmin">
            <div className={classeform}>
                <h1>Login</h1>
                <input type='text' onChange={(e) =>{setUser(e.target.value)}} placeholder='Usuário'></input>
                <input type='password' onChange={(e) =>{setPassword(e.target.value)}} placeholder='Senha'></input>
                <button onClick={handleClick}>Enviar</button>
            </div>

            <div className={classe}>
                <ReadItems />
            </div>
        </div>

    );
}