import './App.css';
import Welcome from './pages/welcome/Welcome';
import LogInPage from './pages/log-in-page/LogInPage';
import UserDashBoard from './pages/user-dash/UserDashBoard';
import NavBar from './components/navbar/NavBar';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/sign-up-page/SignUpPage';
import AdminDashBoard from './pages/admin-dash/AdminDashBoard';


function App() {
  const [user, setUser] = useState(null);
  // const [admin, setAdmin] = useState(null);

  return (
    <div className="app">
      <div className="app-container">

      {user ?
        <>
        <NavBar />
        <Routes>
            <Route path='/user/dashboard' element={<UserDashBoard />} />
            <Route path='/admin/dashboard' element={<AdminDashBoard />} />
          </Routes>
        </>
       :
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path='/signup' element={<SignUpPage setUser={setUser} /> } />
          <Route path="/login" element={<LogInPage />} />
        </Routes>}
      </div>
    </div>
  );
}

export default App;
