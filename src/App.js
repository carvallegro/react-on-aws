import {UpdateNotifications} from "./features/update-notification";
import janeLogo from './jane_logo_200.png'
import './App.css';

const VERSION_NUMBER = process.env.REACT_APP_VERSION

function App() {
    console.log("Version number", VERSION_NUMBER)
  return (

    <div className="App">
      <UpdateNotifications />
      <header className="App-header">
        <img src={janeLogo} className="App-logo" alt="logo" />
        <h1>
          Jane has a CYAN background
        </h1>
          <h2>Version number: {VERSION_NUMBER}</h2>
      </header>
    </div>
  );
}

export default App;
