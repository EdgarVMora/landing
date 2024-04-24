function Tareas(){
    const pendientes = ["lavar", "limpiar", "trapear"]
    return(
        <div className="Tareas_pendientes">
            <h1>Lista de tareas</h1>

            <p>Actividades pendientes</p>
            {pendientes.map(elemento => <li>{elemento}</li>)}
        </div>
    )
}

export default Tareas