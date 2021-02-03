import AppTop from './AppTop'
import ProfitLoss from './ProfitLoss';
import AppHistory from './AppHistory';
import AddData from './AppAddData';
import {UserAuthCon} from '../ContextData/Context';
import { useContext } from 'react';
import AppLogin from './AppLogin';

function Parent() {
    let [UserAuth,setUserAuth] = useContext(UserAuthCon);



    // this function will open the modal window  
    function openModal(){
        document.getElementById("modal").classList.remove("hide");
    }

    return (
        <>{UserAuth?
            <div className="interface">
                <div className="data">
                    <AppTop/>
                    <ProfitLoss/>
                    <AppHistory/>
                    <AddData/>
                </div>
                <div className="addbutton" onClick={()=>{openModal()}}>+</div> 
            </div>
            :
            localStorage.getItem("UserAuth") ?
                setUserAuth(JSON.parse(localStorage.getItem("UserAuth")))
            :
                <div className="auth">
                    <AppLogin/>
                </div>
            }
        </> 
        
    );
}

export default Parent;
