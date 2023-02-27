import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    const css = {backgroundColor: hexToRgba(props.cor, '0.4')}

    return (
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <input value={props.cor} type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.nome)} />
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {                    
                    return <Colaborador 
                        favorito={colaborador.favorito}
                        id={colaborador.id} 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        corDeFundo={props.cor} 
                        aoDeletar={props.aoDeletar}
                        aoFavoritar={props.aoFavoritar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time