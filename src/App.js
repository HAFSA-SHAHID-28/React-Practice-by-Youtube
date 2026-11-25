
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

const [mode, setMode] = useState('light');


  return (
    <>

      <Navbar mode={mode} title={'TextUtils'} toggleMode={toggleMode} />

      <div className="container my-6">
        <TextForm heading="Enter the text to analyze below:" />
        {/* <About /> */}

      </div>




    </>
  );
}

export default App;
