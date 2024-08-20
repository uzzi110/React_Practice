import logo from './logo.svg';
import './App.css';
import ComponentOne from './1.jsx';
import ComponentTwo from './2.jsx';
import ComponentThree from './3.jsx';
import ComponentFour from './4.jsx';
import UseEffect from './Components/useeffect.jsx';
import UseState from './Components/usestate.jsx';
import UseRef from './Components/useRef.jsx';
import UseMemo from './Components/usememo.jsx';
import { BrowserRouter, Route, Routes, Link } from'react-router-dom';
import { useState } from 'react';
import NavBar from './Components/navBar.jsx'
import Nestedpage from './Components/Nested.jsx';
import Nested1 from './Components/Nested1.jsx';
import Nested2 from './Components/Nested2.jsx';

function App() {

  // const HelloProp = () => {
  //   alert('Hello from ComponentTwo funtion as props');
  // }

  // const alertfromchild = (message) => {
  //   alert(`alert from child :: ${message}`);
  // }
  return (

    <div className="App">

      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<h1>Home Page</h1>} />
        <Route path="/useState" element={<UseState/>} />
        <Route path="/useEffect" element={<UseEffect/>} />
        <Route path="/useMemo" element={<UseMemo/>} />
        <Route path="/useRef" element={<UseRef/>} />
        <Route path="/nested_one/" element={<Nestedpage/>}>
        <Route path="nested1" element={<Nested1/>} />
        <Route path="nested2" element={<Nested2/>} />
        
        </Route>
        <Route path="/*" element={<h1>404 page not found</h1>} />
       
      </Routes>
      </BrowserRouter>
      
      {/* name="from c1" */}
      {/* <ComponentOne hero={ComponentThree} />   */}
      {/* <ComponentOne/>
      <ComponentTwo name={true}/> */}
      {/* <ComponentTwo  HelloProp={HelloProp}/> */}

      {/* lifting_up_the_state */}
      {/* <ComponentFour fromchild={alertfromchild}></ComponentFour> */}

      {/* <UseState></UseState> */}
      {/* <UseEffect></UseEffect> */}
      
      

    </div>
  );
}

export default App;
