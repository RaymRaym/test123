import logo from './logo.svg';
import './App.css';

function Header(){
  return (
      <header>
        <h1>Rui's workshop</h1>
      </header>
  )
}

function Main(){
  return (
      <section>
        <p>We do any kind of project here.</p>
      </section>
  )
}

function Footer(){
  return (
      <footer>
        Yes, that's it.
      </footer>
  )
}


function App() {
  return (
    <div className="App">
      {/*original*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

      <Header/>
      <Main/>
      <Footer/>


    </div>
  );
}

export default App;
