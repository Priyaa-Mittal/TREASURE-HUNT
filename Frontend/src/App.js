import Home from './screens/home';
import Login from './screens/login';
import SignUp from './screens/signUp';
import About from './screens/about';
import Card1 from './screens/card1';
import Dash from './screens/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/about" element={<About/>}>About</Route>
          <Route path="/signup" element={<SignUp />}>SignUp</Route>
          <Route path="/login" element={<Login />}>Login</Route>
          <Route path="/card1" element={<Card1/>}></Route>
          <Route path="/dashboard" element={<Dash/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
