import React, { useContext } from 'react';
import {IncomeCon,ExpenseCon} from '../ContextData/Context'

function ProfitLoss(){
    let [Income,] = useContext(IncomeCon);
    let [Expense,] = useContext(ExpenseCon);
    return(
        <div className="inoutdisplay">
            <div className="showdate">Jan 18</div>
            <div className="income"><span className="small">INCOME</span><br/>${Income}</div>
            <div className="expense"><span className="small">EXPENSE</span><br/>${Expense}</div>
        </div>
    )
}
export default ProfitLoss;