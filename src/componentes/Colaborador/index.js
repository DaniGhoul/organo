import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, id, corDeFundo, aoDeletar, favorito, aoFavoritar}) => {

    function favoritar () {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(id)} 
            />
            <div className='superior' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='inferior'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito 
                        ? <AiFillHeart {...propsFavorito} color='#FF0000'/> 
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador