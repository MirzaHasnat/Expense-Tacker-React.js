import React, { useContext, useEffect, useState } from 'react';
import {DataCon,IncomeCon,ExpenseCon,UserAuthCon,DateMonthCon,DateDayCon,AllExpenseCon,AllIncomeCon} from '../ContextData/Context';
import firebase ,{} from '../firebase/FirebaseConfig';

function AddData() {
    //storing input values
    let [InputDis,setInputDis] = useState("");
    let [InputAmt,setInputAmt] = useState(0);
    let [InputTyp,setInputTyp] = useState("income");
    let [IsError,setIsError] = useState(0);
    let [ErrorMsg,setErrorMsg] = useState("Hellow");
    let [SucMsg,setSucMsg] = useState(null);
    
    //getting context values
    let [,setData] = useContext(DataCon);
    let [,setIncome] = useContext(IncomeCon);
    let [,setExpense] = useContext(ExpenseCon);
    let [UserAuth,] = useContext(UserAuthCon);
    let [DateMonth,] = useContext(DateMonthCon);
    let [DateDay,] = useContext(DateDayCon);
    let [,setAllIncome] = useContext(AllIncomeCon);
    let [,setAllExpense] = useContext(AllExpenseCon);



    function addDataDatabase(){
        if(InputAmt === "" || InputDis === "" || InputDis === " " || InputAmt === 0 || InputAmt <= 0){
            setSucMsg(null);
            setErrorMsg("Opps! Something is wrong with your input values.")
            setIsError(1);
        }else{

            const dataObject = firebase.database().ref("data");
            const data = {
                datemonth: DateMonth,
                dateday: DateDay,
                discription: InputDis,
                type: InputTyp,
                amount: InputAmt,
                userid: UserAuth.user.uid
            }
            dataObject.push(data);
            setIsError(0)
            setSucMsg("Successfully Added:["+InputDis+":"+InputAmt+"]");
            setInputAmt("");
            setInputDis("");
            setInputTyp("income");
        }

    }


    useEffect(()=>{
        let dataObject = firebase.database().ref("data");
        dataObject.on("value",(snapshot)=>{
            let historydata = snapshot.val();
            let tempdata = [];
            let newExpense = 0;
            let newIncome = 0;
            let newAllExpense = 0;
            let newAllIncome = 0;
            
            for(let item in historydata){
                if((historydata[item].userid === UserAuth.user.uid)){ 
                    if((historydata[item].datemonth === DateMonth && parseInt(historydata[item].dateday) === parseInt(DateDay))){
                        tempdata.push({
                            id:item,
                            datemonth:historydata[item].datemonth,
                            dateday:historydata[item].dateday,
                            discription:historydata[item].discription,
                            type:historydata[item].type,
                            amount:historydata[item].amount

                        })
                        //this will update the current date expense and income
                        if(historydata[item].type === "expense"){
                            newExpense = parseInt(newExpense)+parseInt(historydata[item].amount);
                        }else {
                            newIncome = parseInt(newIncome)+parseInt(historydata[item].amount);
                        }
                    }
                    // this will update the all dates expense and income
                    if(historydata[item].type === "expense"){
                        newAllExpense = parseInt(newAllExpense)+parseInt(historydata[item].amount);
                    }else {
                        newAllIncome = parseInt(newAllIncome)+parseInt(historydata[item].amount);
                    }                    
                }
            }
            setData(tempdata); //setting up new data
            setIncome(newIncome); //setting up new Income
            setExpense(newExpense); //setting up new Expense
            setAllIncome(newAllIncome);
            setAllExpense(newAllExpense);
        });
    },[setData,setIncome,setExpense,UserAuth,DateDay,DateMonth,setAllIncome,setAllExpense]);

    //this fucniton is for closing the modal
    function closeModal(){
        document.getElementById("modal").classList.add("hide");
        setInputAmt("");
        setInputDis("");
        setInputTyp("income");        
      }
    


    return(
        <>
        <div className="modal hide" id="modal">
            <h2>Add</h2>
            <table>
                <caption style={{color:"red"}}>{IsError ? ErrorMsg : ""}</caption>
                <p style={{color:"green"}}>{SucMsg?SucMsg:""}</p>
                <tbody>
                    <tr>
                        <td>
                            <select id="type" value={InputTyp} onChange={(e)=>{setInputTyp(e.target.value)}}>
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
                        <td><button onClick={()=>{addDataDatabase();}}>Add</button><button onClick={()=>{closeModal()}}>Close</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default AddData;