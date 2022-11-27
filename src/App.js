
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './homepage';
import About from './about';
import Education from './education';
import Interests from './interests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/interests' element={<Interests/>}/>
      </Routes>
    </Router>
  );
}

export default App;
