import logo from './logo.svg';
import './App.css';
import ComponentOne from './1.jsx';
import ComponentTwo from './2.jsx';
import ComponentThree from './3.jsx';
import ComponentFour from './4.jsx';

function App() {

  // const HelloProp = () => {
  //   alert('Hello from ComponentTwo funtion as props');
  // }


  const alertfromchild = (message) => {
    alert(`alert from child :: ${message}`);
  }
  return (

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* name="from c1" */}
      {/* <ComponentOne hero={ComponentThree} />   */}
      {/* <ComponentOne/>


      <ComponentTwo name={true}/> */}

      {/* <ComponentTwo  HelloProp={HelloProp}/> */}


      {/* lifting_up_the_state */}


      <ComponentFour fromchild={alertfromchild}></ComponentFour>


    </div>
  );
}

export default App;
