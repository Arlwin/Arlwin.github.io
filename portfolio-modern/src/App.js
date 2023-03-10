import { Footer, Header, About } from './containers';
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
      <Footer />
    </div>
  )
};

export default App;