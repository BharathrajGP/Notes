import logo from './logo.svg';
import './App.css';
// import Hello from './JSX_Folder/Jsx_1';
import Naanu from './Props_Folder/Name';
import Welcome from './Components/Class_Welcome';
import Message from './States_Folder/Message';
import Counter from './States_Folder/Counter';
import FunctionClick from './Event_Handler_Folder/FunctionClick';
import ClassClick from './Event_Handler_Folder/ClassClick';
import EventBind from './Event_Handler_Folder/EventBind';
import ParentCompo from './MethodsAsProps_Folder/ParentCompo';
import User from './Conditional_Rendering_Folder/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          JSX,Props,State Component,Event Handling,Binding Event Handler,Methods as props,Conditional Rendering
        </p> 
      </header>
      {/* 1 */}
       {/* Accesing JSX exercise */}
        {/* <Hello></Hello> */}



        {/* 2 */}
        {/* Accesing Props exercise */}
        {/* <Naanu name="Bharath" age="23">
          <p>Children property </p>
        </Naanu>
        <Naanu name="Vijay" age="21">
          <button type="submit">submit</button>
        </Naanu>
        <Naanu name="Subadhre" age="16">
          <a href="https://en.wikipedia.org/wiki/MS_Dhoni">click me</a>
        </Naanu> */}
        {/* Props in Class Component */}
        {/* <Welcome name="Bharath" age="23">
        <p>Children property </p>
        </Welcome>
        <Welcome name="Vijay" age="21"></Welcome> */}



        {/* 3 */}
        {/* Component State */}
        {/* <Message></Message> */}
        {/* setState() */}
        {/* <Counter></Counter> */}


        {/* 4 */}
        {/* Event handling */}
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* Event Binding */}
        {/* <EventBind></EventBind> */}


        {/* 5 */}
        {/* Methods as props */}
        {/* <ParentCompo></ParentCompo> */}


        {/* 6 */}
        {/* Conditional Rendering */}
        <User></User>
    </div>
  );
}

export default App;
