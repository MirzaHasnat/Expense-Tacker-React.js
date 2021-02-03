import './App.css';
import CreateData from './ContextData/Context';
import Parent from './App/Parrent';

function App() {
 
// this function will open the modal window
  return (
      <CreateData>
        <Parent/>
      </CreateData>
  );
}

export default App;
