import { useState } from "react"
import "./estiloForm.css"
const urlDate = 'http://localhost:3000'
export function Formulario(){
    const[nombre, setNombre] = useState("")
    const[apellido, setApellido] = useState("")
    const[numero, setNumero] = useState("")
    const enviar = (e) =>{
        e.preventDefault()
        const datos = {
            nombre: nombre,
            apellido:apellido,
            numero: numero
        }
        envioDatos(datos)
    }
    const setNom = (e) =>{
        console.log(e.target.value)
        setNombre(e.target.value)
    }
    const setApe = (e) =>{
        console.log(e.target.value)
        setApellido(e.target.value)
    }
    const setNum = (e) =>{
        console.log(e.target.value)
       setNumero(e.target.value)
    }
    return(
        <div className="contanedorForm">
            <form onSubmit={enviar} method="POST">
            <h1>Nombre:</h1>
            <input type="text"  value={nombre} onChange={setNom} name="nombre" />
            <h1>Apellido: </h1>
            <input type="text" value={apellido} onChange={setApe}  name="apellido"/>
            <h1>Numero: </h1>
            <input type="text" value={numero} onChange={setNum} name="numero" />
            <button type='submit'>enviar</button>
       </form>
        </div>
    )
}

const envioDatos = async (datos)=>{
     const envioData = await fetch('http://localhost:3000/formulario',{
        method:'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-type':'application/json'
        }
    })
    return await envioData
}