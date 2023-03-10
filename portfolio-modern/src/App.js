import { Footer, Header, About, Experiences, Projects } from './containers';
import { Navbar, Techs } from './components';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Techs />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  )
};

export default App;