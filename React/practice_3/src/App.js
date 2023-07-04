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
import FragmentDemo from './Fragment_Folder/FragmentDemo';
import Table from './Fragment_Folder/Table';
import PureCompo from './PureComponent/PureCompo';
import ParentCompo from './PureComponent/ParentCompo';
import ParentCompos from './Memo_Folder/ParentCompos';
import RefsDemo from './Refs/RefsDemo';
import RefsDemo1 from './Refs/RefsDemo1';
import FocusInput from './RefsWithClassComponent/FocusInput';


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
      {/* <Updating></Updating> */}


      {/* Fragment */}
      {/* <FragmentDemo></FragmentDemo>
      <Table></Table> */}


      {/* Pure Component */}
      {/* <PureCompo></PureCompo> */}
      {/* Difference b/w pure component and component */}
      {/* <ParentCompo></ParentCompo> */}


      {/* Memo */}
      {/* <ParentCompos/> */}


      {/* Refs */}
      {/* <RefsDemo></RefsDemo>
      <RefsDemo1></RefsDemo1> */}




      <FocusInput></FocusInput>
    </div>
  );
}

export default App;
