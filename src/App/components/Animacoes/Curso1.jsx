import { useState } from 'react';
import { openLink } from '../../function';
import './stylesheet.css'

const Animacao = ({ className, animation = 0 }) => {
    const [hover, setHover] = useState(-1);
    let folder;
    let text;
    switch (animation) {
        case 1:
            folder = 'animation1'
            text = (<>
                <h1 className="titulo text-5xl top-8 xl:top-32" >Trilha</h1>
                <h1 className="titulo text-5xl top-20 xl:top-44" >Mulheres</h1>
                <h1 className="titulo text-5xl top-32 xl:top-56" >Provedoras</h1>
            </>)
            break;
        default:
            folder = 'animation'
            text = (<div>
                <h1 className="titulo text-5xl top-8 xl:top-32" >Trilha</h1>
                <h1 className="titulo text-5xl top-20 xl:top-44" >Acelerando</h1>
                <h1 className="titulo text-5xl top-32 xl:top-56" >Talentos</h1>
            </div>)
            break;
    }

    const handleHover = (n = -1) => () => setHover(n);

    return (
        <div className={`animacao select-none ${className}`}>

            <div className="box">

                <img alt='Erro' src={`/animation/fundo-com-nuvens.png`} className="fundo" width="100%" />

                <img alt='Erro' src={`/animation/montanhas.png`} className="montanha" width="74%" />
                <img alt='Erro' src={`/animation/chao-com-arvores-e-caminho.png`} width="100%" style={{ position: 'absolute', top: '36vh', left: '0vw', animation: 'anima2 1s ease-in-out both' }} />

                <img alt='Erro' src={`/${folder}/1boneco-(conversando).png`} className="boneco" width="12.5%" style={{ left: '25vw', top: '46.4vh', animationDelay: '400ms' }} />
                <img alt='Erro' src={`/${folder}/2boneco-olhando-pra-cima.png`} className="boneco" width="7%" style={{ left: '78.5vw', top: '43vh', animationDelay: '800ms' }} />
                <img alt='Erro' src={`/animation/3-caminhando.png`} className="boneco" width="5.5%" style={{ left: '72vw', top: '20.35vh', animationDelay: '1200ms' }} />
                <img alt='Erro' src={`/${folder}/4-graduado.png`} className="boneco" width="16.5%" style={{ left: '45vw', top: '11vh', animationDelay: '1600ms', }} />
                <img alt='Erro' src={`/${folder}/5-trabalhador.png`} className="boneco" width="7%" style={{ left: '37.8vw', top: '2vh', animationDelay: '2000ms', }} />

                <div className={`absolute origin-bottom-left transition delay-100 ease-out ${hover === 0 ? 'scale-100' : 'scale-0'}`} style={{ left: '30.8vw', top: '29vh' }} ><div className="bg-primary text-white text-xs rounded py-1 px-4">
                    Inteligência Emocional
                    <svg className="absolute text-black h-2 left-0 ml-3 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                </div></div><img onMouseEnter={handleHover(0)} onMouseLeave={handleHover()} alt='Erro' src={`/animation/1gps---inteligencia-emocional.png`} className="gps" id="gps1" width="7.3%" style={{ left: '29vw', top: '31.2vh', animationDelay: '2400ms' }} />
                <div className={`absolute origin-bottom-left transition delay-100 ease-out ${hover === 1 ? 'scale-100' : 'scale-0'}`} style={{ left: '83.8vw', top: '30vh' }} ><div className="bg-primary text-white text-xs rounded py-1 px-4">
                    Comunicação Efetiva
                    <svg className="absolute text-black h-2 left-0 ml-3 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                </div></div><img onMouseEnter={handleHover(1)} onMouseLeave={handleHover()} alt='Erro' src={`/animation/2gps---comunicacaoefetiva.png`} className="gps" id="gps2" width="7.3%" style={{ left: '82vw', top: '32.2vh', animationDelay: '2800ms' }} />
                <div className={`absolute origin-bottom-left transition delay-100 ease-out ${hover === 2 ? 'scale-100' : 'scale-0'}`} style={{ left: '65.9vw', top: '10vh' }} ><div className="bg-primary text-white text-xs rounded py-1 px-4">
                    Gestão de Conflitos
                    <svg className="absolute text-black h-2 left-0 ml-3 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                </div></div><img onMouseEnter={handleHover(2)} onMouseLeave={handleHover()} alt='Erro' src={`/animation/3gps---gestao-de-conflitos.png`} className="gps" id="gps3" width="7.3%" style={{ left: '64.1vw', top: '12.2vh', animationDelay: '3200ms' }} />
                <div className={`absolute origin-bottom-left transition delay-100 ease-out ${hover === 3 ? 'scale-100' : 'scale-0'}`} style={{ left: '50.8vw', top: '25vh' }} ><div className="bg-primary text-white text-xs rounded py-1 px-4">
                    Trabalhabilidade
                    <svg className="absolute text-black h-2 left-0 ml-3 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                </div></div><img onMouseEnter={handleHover(3)} onMouseLeave={handleHover()} alt='Erro' src={`/animation/4gps---trabalhabilidade.png`} className="gps" id="gps4" width="7.3%" style={{ left: '49vw', top: '27.2vh', animationDelay: '3600ms' }} />
                <div className={`absolute origin-bottom-left transition delay-100 ease-out ${hover === 4 ? 'scale-100' : 'scale-0'}`} style={{ left: '36.8vw', top: '1vh' }} ><div className="bg-primary text-white text-xs rounded py-1 px-4">
                    Projeto de Vida
                    <svg className="absolute text-black h-2 left-0 ml-3 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                </div></div><img onMouseEnter={handleHover(4)} onMouseLeave={handleHover()} alt='Erro' src={`/animation/5gps---projeto-de-vida.png`} className="gps" id="gps5" width="7.3%" style={{ left: '35vw', top: '3.2vh', animationDelay: '4000ms' }} />

                <div className="esconder"></div>

                {text}

                <button onClick={openLink('https://app.fazcarreira.com/')} className='botao01 bg-primary text-white bottom-64 xl:bottom-44 xxl:bottom-96 px-3 py-2 rounded-lg hover:bg-primary/80'>Inscreva-se</button>

            </div>

        </div>
    );
}

export default Animacao;