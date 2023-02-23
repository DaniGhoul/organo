import './Rodape.css'

const Rodape = () => {
    return (
        <div className='rodape'>
            <div className='links'>
                <a href='http://facebook.com'><img src='/imagens/fb.png' alt='Facebook do Organo'/></a>
                <a href='http://twitter.com'><img src='/imagens/tw.png' alt='Twitter do Organo'/></a>
                <a href='http://instagram.com'><img src='/imagens/ig.png' alt='Instagram do Organo'/></a>
            </div>
            <img src='/imagens/logo.png' alt=''/>
            <p>Desenvolvido por Alura.</p>
        </div>
    )
}

export default Rodape