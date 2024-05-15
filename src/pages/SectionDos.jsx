function latestWork(props) {
    const {title} = props
    return(
        
        <div className="last_work">
           <h2> My lastest Work</h2> 
           <p>
            A la corta edad de 3 añitos, solia ser 
            mandado por las tortillas en un tramo 
            aproximado de 3 cuadras, donde el kilo
            en esos tiempos eran 6 pesos, tenia tiempo 
            para comer un taco de sal y ponerle 
            tantita salsa.
           </p>
           <div className="covers">
                <div className="cover">
                    <p>Portada 1</p>
                </div>
                <div className="cover">
                <p>Portada 2</p>
                </div>
                <div className="cover">
                <p>Portada 3</p>
                </div >
            </div>
        </div>
    )
}

export default latestWork
