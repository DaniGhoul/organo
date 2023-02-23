import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='superior' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='inferior'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador