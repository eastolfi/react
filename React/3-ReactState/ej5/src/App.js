import './App.css';
import biblioteca from './biblioteca';


import Cabecera from './Cabecera';
import Main from './Main';

function App() {
  return (<>
    <Cabecera />
    <div className='grid--3-cols grid'>
      <Main libros={biblioteca.libros}/>
    </div>

  </>);
}

export default App;
