import React, { useContext, useState } from 'react';
import {DataCon,IncomeCon,ExpenseCon,EntriesCon} from '../ContextData/Context';

function AddData() {
    //storing input values
    let [InputDis,setInputDis] = useState();
    let [InputAmt,setInputAmt] = useState();
    let [InputTyp,setInputTyp] = useState("income");
    
    //getting context values
    let [Data,setData] = useContext(DataCon);
    let [Income,setIncome] = useContext(IncomeCon);
    let [Expense,setExpense] = useContext(ExpenseCon);
    let [Entries,setEntries] = useContext(EntriesCon);

    //this function will store data in data state in context.js file
    function addData(){
        setEntries(Entries+1); //adding one to new entry

        // this statement will check where the data should go
        if(InputTyp==="expense"){
            let NewEntry = Entries+1
            let OldData = Data
            OldData["expense"+NewEntry] = {"amount":InputAmt,"discription":InputDis};
            setExpense(parseInt(Expense)+parseInt(InputAmt));
            setData(OldData)
        }else if(InputTyp==="income"){
            let NewEntry = Entries+1
            let OldData = Data
            OldData["income"+NewEntry] = {"amount":InputAmt,"discription":InputDis};
            setIncome(parseInt(Income)+parseInt(InputAmt));
            setData(OldData)
        }
    }

    function closeModal(){
        document.getElementById("modal").classList.add("hide");
      }
    return(
        <div className="modal hide" id="modal">
            <h2>Add</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <select id="type" onChange={(e)=>{setInputTyp(e.target.value)}}>
                                <option value="income">INCOME</option>
                                <option value="expense">EXPENSE</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="text" required="" id="discription" placeholder="Discription " value={InputDis} onChange={(e)=>{setInputDis(e.target.value);}}/></td>
                    </tr>
                    <tr>
                        <td><input type="number" required="" id="amount" placeholder="Amount" value={InputAmt} onChange={(e)=>{setInputAmt(e.target.value);}}/></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>{addData()}}>Add</button><button onClick={()=>{closeModal()}}>Close</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddData;