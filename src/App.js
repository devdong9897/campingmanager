import './App.css';
import { Route, Routes } from 'react-router';
import Login from './component/Login';
import Account from './pages/Account';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Account />}></Route>
      <Route path='/main/*' element={<Main/>}></Route>
    </Routes>
  );
}

export default App;
