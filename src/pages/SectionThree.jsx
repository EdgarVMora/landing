import Barra from "../components/barra"

function Skills() {
    return (

        <div className="my_skills">
            <h2>My skills</h2>
            <p>
                A lo largo de mi vida he adquirido cierto
                conocimiento en el area de la salud,
                ventas, comercio, indutrial y ahora
                sobre programacion.
            </p>

            <div className="master">

                <div>
                    <Barra porcentaje={100} />
                    <h4>Medicina</h4>
                </div>
                <Barra porcentaje={100} />
                <h4>Comercio</h4>
                <Barra porcentaje={100} />
                <h4>Programcion</h4>
                <Barra porcentaje={100} />
                <h4>Edicion</h4>

            </div>
        </div>
    )
}

export default Skills