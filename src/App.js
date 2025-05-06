import './index.css';
import FetchUsers from './components/FetchUser';
import Userform from './components/Userform';
import Userlist from './components/Userlist';

function App() {
  return (
    <div className="App">
      
      <Userform />
      <FetchUsers />
      <Userlist />

    </div>
  );
}

export default App;
