
import './App.css';
//import Compras from './components/Compras'
//import Tareas from './components/Tareas'
import Browser from './pages/Browser'
import Hero from './pages/Hero'
import SectionDos from './pages/SectionDos'
import SectionThree  from './pages/SectionThree'
import SectionFour from './pages/SectionFour'
import SectionFive from './pages/SectionFive'

function App() {

  const name = "Edgarcito"

  return (
    <div className="App">
      <header>
      </header>
      <Browser/>
      <Hero />
      <SectionDos  />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default App;
