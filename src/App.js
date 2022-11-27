
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './homepage';
import About from './about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
