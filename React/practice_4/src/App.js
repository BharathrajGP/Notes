// import logo from './logo.svg';
import './App.css';
import Fuctional from './Components/Fuctional';
import ClassCom from './Components/ClassCom';
import Home from './EventHandling/Home';
import Naanu from './Returning_Multi_JSX/Naanu';
import Logical from './ConditionalRendering/Logical';
import Ternary from './ConditionalRendering/Ternary';
import Parent from './props/Parent';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import UseRef from './Hooks/UseRef';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from './Router/First';
import Second from './Router/Second';
import Third from './Router/Third';

function App() {
  return (
    // <div className="App">
    //   Naanu
    //   <Fuctional></Fuctional>
    //   <ClassCom></ClassCom>
    //   <Home></Home>
    //   <Naanu></Naanu>
    //   <Logical></Logical>
    //   <Ternary/>
    //   <Parent/>
    //   <UseState></UseState>
    //   {/* <UseEffect/> */}
    //   <UseRef></UseRef>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/2' element={<Second/>}/>
        <Route path='/3' element={<Third/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
