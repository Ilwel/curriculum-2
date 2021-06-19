import './styles.css'
import experience from '../../experience';
import { useState } from 'react';

function Experience({ isRender }) {

    const [subMenu, setSubMenu] = useState([true, false]);
    const [iteratorWork, setIteratorWork] = useState(0);
    const [iteratorNoWork, setIteratorNoWork] = useState(0);

    const works = experience.filter(item => item.isJob);
    const noWorks = experience.filter(item => !item.isJob);

    const displayFlex = {

        display: 'flex'

    }
    const displayNone = {

        display: 'none'

    }

    function callSubMenu(e) {

        const { target: { id } } = e;
        if (id === 'sub-menu-1') setSubMenu([true, false]);
        else if (id === 'sub-menu-2') setSubMenu([false, true]);

    }

    function nextCardWork(){

        if(iteratorWork === works.length - 1) setIteratorWork(0);
        else setIteratorWork(iteratorWork + 1);

    }

    function nextCardNoWork(){

        if(iteratorNoWork === noWorks.length - 1) setIteratorNoWork(0);
        else setIteratorNoWork(iteratorNoWork + 1);

    }

    return (

        <>
            {isRender && (
                <>
                    <div className="experience-menu">
                        <h1>Experiência</h1>
                        <div className="options">
                            <button id="sub-menu-1" onClick={e => callSubMenu(e)}>Experiência Profissional</button>
                            <button id="sub-menu-2" onClick={e => callSubMenu(e)}>Formação Acadêmica</button>
                        </div>

                    </div>

                    {subMenu[0] && (

                        <div className="works">
                            {works.map((work, index) => (
                                <div style={index === iteratorWork ? displayFlex : displayNone} className="experience-card">
                                    <h1>{work.name}</h1>
                                    <h2>{work.time_course}</h2>
                                    <p>{work.position}</p>
                                    <p>{work.details}</p>
                                </div>
                            ))}
                            <button onClick={() => nextCardWork()}>mais</button>
                        </div>

                    )}

                    {subMenu[1] && (

                        <div className="no-works">
                            {noWorks.map((work, index) => (
                                <div style={index === iteratorNoWork ? displayFlex : displayNone} className="experience-card">
                                    <h1>{work.name}</h1>
                                    <h2>{work.time_course}</h2>
                                    <p>{work.level}</p>
                                    <p>{work.details}</p>
                                </div>
                            ))}
                            <button onClick={() => nextCardNoWork()}>mais</button>
                        </div>

                    )}

                </>

            )}

        </>

    )

}

export default Experience;