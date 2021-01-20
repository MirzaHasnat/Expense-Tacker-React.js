import './App.css';
import AppTop from './App/AppTop'
import ProfitLoss from './App/ProfitLoss';
import AppHistory from './App/AppHistory';
import AddData from './App/AppAddData';
import CreateData from './ContextData/Context';

function App() {
 
// this function will open the modal window
  function openModal(){
      document.getElementById("modal").classList.remove("hide");
  }
  return (
    <>
      <CreateData>
        <div className="interface">
          <div className="data">
            <AppTop/>
            <ProfitLoss/>
            <AppHistory/>
            <AddData/>
          </div>
          <div className="addbutton" onClick={()=>{openModal()}}>+</div> 
        </div>
      </CreateData>
    </>
  );
}

export default App;
