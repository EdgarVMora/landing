import Barra from "../components/barra"

function Skills() {
    return (

        <section id="skills" className="my_skills">
            <h2>My skills</h2>
            <p>
                A lo largo de mi vida he adquirido cierto
                conocimiento en el area de la salud,
                ventas, comercio, indutrial y ahora
                sobre programacion.
            </p>

            <div className="master">

                <div>
                    <Barra porcentaje={85} />
                    <h4>Medicina</h4>
                </div>
                <div>
                    <Barra porcentaje={75} />
                    <h4>Comercio</h4>
                </div>
                <div>
                    <Barra porcentaje={50} />
                    <h4>Programcion</h4>
                </div>
                <div>
                    <Barra porcentaje={95} />
                    <h4>Edicion</h4>
                </div>
               

            </div>
        </section>
    )
}

export default Skills