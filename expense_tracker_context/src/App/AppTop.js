import React, { useContext } from 'react';
import {Circle} from 'rc-progress';
import {IncomeCon,ExpenseCon  } from "../ContextData/Context";
function AppTop(){
    let [Income,] = useContext(IncomeCon);
    let [Expense,] = useContext(ExpenseCon);

    function calculatePercent() {
        let PercentFormula = (100/Income)*Expense;
        return PercentFormula;
    }
    function calculateBalance(){
        let BalanceFormula = Income-Expense;
        return BalanceFormula;
    }
    return(
        <div className="top">
            <div className="inside">
                <div className="dashes">
                    <div className="dash"></div>
                    <div className="dash"></div>
                    <div className="dash"></div>
                </div>
                <h3>Jan 18</h3>
                <div className="inoutcome">
                    <h4><span className="small">INCOME</span> ${Income}</h4>
                    <div>
                        <Circle percent={calculatePercent()} strokeWidth="4" strokeColor="#D3D3D3" width="50px"/> 
                    </div>
                    <h4><span className="small">EXPENSE</span> ${Expense}</h4>
                </div>
                <h4><span className="small">BALANCE</span> ${calculateBalance()}</h4>
            </div>
        </div>        
    )
}
export default AppTop