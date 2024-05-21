
import './App.css';
//import Compras from './components/Compras'
//import Tareas from './components/Tareas'
import Browser from './pages/Nav'
import Hero from './pages/Hero'
import LastestWork from './pages/Lastest_Work'
import Skills  from './pages/Skills'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function App() {

  const name = "Edgarcito"

  return (
    <div className="App">
      <header>
      </header>
      <Browser/>
      <Hero />
      <LastestWork  />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
