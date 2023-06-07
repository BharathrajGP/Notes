import logo from './logo.svg';
import './App.css';
import List from './Rendering_List_Folder/List';
import Key_As_Index from './Rendering_List_Folder/Key_As_Index';
import Stylesheet from './StylingReact_Folder/Stylesheet';
import Inline from './StylingReact_Folder/Inline';
import style from './StylingReact_Folder/CSSModule.module.css'
import Form from './FormHandling_Folder/Form';
import Mounting from './LifeCycle_Floder/Mounting';
import Updating from './LifeCycle_Floder/Updating';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rendering List,Reteriving keys,Style react component
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
      {/* <List></List> */}


      {/* Retreiving by index */}
      {/* <Key_As_Index></Key_As_Index> */}


      {/* Styling React Component */}
      {/* 1. CSS StyleSheet 
          primary is props*/}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* 2. Inline Styling */}
      {/* <Inline></Inline> */}
      {/* 3. CSS Module */}
      {/* <h1 className={style.one}>Yeah yeah</h1> */}


      {/* Form Handling */}
      {/* <Form></Form> */}


      {/* LifeCycle */}
      {/* 1.Mounting LifeCycle */}
      {/* <Mounting></Mounting> */}
      {/* 2. Updating */}
      <Updating></Updating>
    </div>
  );
}

export default App;