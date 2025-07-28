import { Routes, Route } from 'react-router-dom';

// Pages
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Chat from './components/pages/Chat';
import Settings from './components/pages/Settings';
import Status from './components/pages/Status';

// Global styles
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </div>
  );
};

export default App;
