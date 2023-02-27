import './Campo.css'

const Campo = ({ type = 'text', label, valor, aoAlterar, obrigatorio = false, placeholder}) => {

    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitar} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo