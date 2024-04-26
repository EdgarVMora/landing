import Background from '../imagen/escritorio-moderno.jpg'
function Headline() {
    return (
        <div className="headline" style={{ backgroundImage: `url(${Background})`
       }} >

            <h1 className="title" style={{
                 color:'red '
            }}>HELLO 
                I am Edgar Mora 
            </h1>


        </div>
    )
}

export default Headline