export function App(){
    return(
        <div className="app">
           <form method="POST">
            <h1>Nombre</h1>
                <input type="text" name="nombre" />
                <h1>apellido</h1>
                <input type="text" name="apellido"/>
                <h1>numero</h1>
                <input type="text" name="numero" />
                <button onSubmit={()=>{
                }}>enviar</button>
           </form>
        </div>  
    )
}