import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LoginScreen from './LoginScreen';
import PatientRecord from './PatientRecord';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={LoginScreen} />
          <Route exact path="/pat/:rut" Component={PatientRecord} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           Yooooo bro
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <PatientRecord></PatientRecord>
//     </div>
//   );
// }

// export default App;