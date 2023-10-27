import logo from './logo.svg';
import './App.css';
import Materiel from './Back_office//Materiel/Materiel';
import Utilisateur from './Back_office/Role/Utilisateur';
import Emprinteur from './Back_office/Emprint/Emprinteur';
import Sale from './Back_office/Emprint/Sale';
import Reparation from './Back_office/Materiel/Reparation';
import Maintenance from './Back_office/Materiel/Maintenance';
import Emprint from './Back_office/Emprint/Emprint';
import {BrowserRouter ,Routes,Switch,Route,Link,HashRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Routes>
        <Route exat path='/Materiel' element={<Materiel/>} />
        <Route exat path='/Utilisateur' element={<Utilisateur/>} />
        <Route exat path='/Emprinteur' element={<Emprinteur/>} />
        <Route exat path='/Sale' element={<Sale/>} />
        <Route exat path='/Maintenance' element={<Maintenance/>} />
        <Route exat path='/Emprint' element={<Emprint/>} />
        <Route exat path='/Reparation' element={<Reparation/>} />
        </Routes>
        
        </BrowserRouter>
    

    </div>
  );
}

export default App;
