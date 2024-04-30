
import './App.css';
//import Compras from './components/Compras'
//import Tareas from './components/Tareas'
import Browser from './pages/Browser'
import SectionOne from './pages/SectionOne'
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
      <SectionOne />
      <SectionDos title={'My latest work'} />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default App;
