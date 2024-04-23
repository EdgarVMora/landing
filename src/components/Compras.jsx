function Compras() {

    const lista=["pan", "lache", "cafe"]


    return(
        <div className="lista">
            <h1> Lista de Compras</h1>
            <ul>
                <li>Cafe</li>
                <li>Pan</li>
                <li>Lache</li>
                {lista.map(elemento => <li>{elemento}</li>)}
            </ul>
        </div>
    )
}

export default Compras