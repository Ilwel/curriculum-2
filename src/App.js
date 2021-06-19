import './App.css';
import { useState, useEffect } from 'react';
import BusinessCard from './components/BusinessCard';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {

  const [menu, setMenu] = useState([true, false, false]);
  const [iterator, setIterator] = useState(0);

  useEffect(() => {

    setIterator(0);

  }, [menu]);

  function callMenu(e){

    const { target:{id} } = e;
    if(id === 'menu-1') setMenu([true, false, false]);
    else if(id === 'menu-2') setMenu([false, true, false]);
    else if(id === 'menu-3') setMenu([false, false, true]);
    

  }

  return (
    <div className="app">

      <div className="hero-header">

        <header className="header">
          <div className="hero-side">
            <span id ='menu-1' onClick={e => callMenu(e)}>Cartão de Visita</span>
            <span id ='menu-2' onClick={e => callMenu(e)}>Projetos</span>
            <span id ='menu-3' onClick={e => callMenu(e)}>Experiência</span>
          </div>

          <div className="hero-aside">
            <a href="https://github.com/Ilwel" target="blanck">Github</a>
            <a href="https://www.linkedin.com/in/ilwel" target="blanck">Linkedin</a>
            <a href="https://www.instagram.com/_ilwel/" target="blanck">Instagram</a>
            
          </div>
        </header>
        <div className="hero"></div>
        <div className="aside-hero">

          <BusinessCard isRender = {menu[0]} iterator = {iterator} setIterator = {setIterator}/>
          <Projects     isRender = {menu[1]}/>
          <Experience   isRender = {menu[2]}/>
          

        </div>

      </div>

    </div>
  );
}

export default App;
