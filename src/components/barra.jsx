
function Barra(props) { // {children, key..., width}
    const {porcentaje} = props
    //const width = props.width
    return <div className='skill-bar'>
        <div style={{ width: `${porcentaje}%` }}>
        </div>
    </div>
}

export default Barra
