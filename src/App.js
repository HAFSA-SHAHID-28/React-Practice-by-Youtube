
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>

      <Navbar />

      <div className="container my-6">
        {/* <TextForm heading="Enter the text to analyze below:" /> */}
        <About />

      </div>




    </>
  );
}

export default App;
