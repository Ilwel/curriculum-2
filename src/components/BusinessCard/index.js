import './styles.css';
import perfilImg from '../../assets/img/perfil.jpeg';
import message from '../../message.js';

function BusinessCard({ isRender, iterator, setIterator }) {

    const displayInline = {

        display:'inline'

    }
    const displayNone   = {

        display:'none'
        
    }

    function nextMessage(){

        if(iterator === message.length - 1) setIterator(0);
        else setIterator(iterator + 1);

    }
    return (

        <>
            {isRender && (
                <>

                    <div className="about">

                        <div className="messages">                  

                            {message.map((m, index) => <p className='message' style={index === iterator ? displayInline : displayNone}>{m}</p>)}

                        </div>
                        <button onClick={() => nextMessage()}> mais </button>
                    
                    </div>

                    <div className="business-card">
                        
                        <h1>Ilwel Isaac</h1>
                        <h2>Web developer</h2>
                        <div className="container">
                            <img src={perfilImg} alt="" />
                            <div>

                                <h3>Fortaleza, CE</h3>
                                <h3>ilwelisaac@hotmail.com</h3>
                                <h3>(85) 98105 - 9749</h3>
                            </div>

                        </div>
                        <div className="tecnologies">

                            <span className='js'>Javascript</span>
                            <span className='react'>React</span>
                            <span className='node'>NodeJS</span>
                            <span className='html'>HTML</span>
                            <span className='css'>CSS</span>
                            <span className='css'>C++</span>

                        </div>

                    </div>

                </>

            )}

        </>

    )

}

export default BusinessCard;