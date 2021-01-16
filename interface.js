import React,{useState} from 'react'
import {Circle} from 'rc-progress'
import delicon from '../delete.png'

export default function Interface(){
    let [income,setIncome] = useState(0);        //state for income 
    let [expense,setExpense] = useState(0);      //state for expense
    let [balance,setBalance] = useState(0);      //state for balance
    let [data,setData] = useState({});
    let [entries,setEntries] = useState(2);



    // this function will calculate percentage for progress bar
    function percentageCalulartorProgressBar(){
        let percentage = 100-((100/income)*expense);
        return percentage;
    }


    //this function will get the current date for the top of application
    function datename(){
        const date = new Date();  // creating new date object
        const month = date.toLocaleString('default', { month: 'short' }); // getting month
        const day = date.getDate() //getting date
        const toreturn = month+" "+day; 
        return toreturn // currentMonth currentDay
    }


    // this funtion will close the modal window
    function closeModal(){
        document.getElementById("modal").classList.add("hide");
    }
    // this function will open the modal window
    function openModal(){
        document.getElementById("modal").classList.remove("hide");
    }

    //this function will mantain the data(how the data should display)
    function displayData(){
        return (
            Object.entries(data).map(([key,value])=>{
                    if(key.startsWith("expense")){
                        return(<div className="data expense">
                            <div className="discription">{value.discription}</div>
                            <div className="amount">{value.amount}</div>
                            <div className="deletethis" onClick={(a)=>{deleteData(a.target.value);}} value={key}><img src={delicon} alt="Delete Icon" width="20px" height="20px"/></div>
                        </div>)
                    }else if(key.startsWith("income")){
                        return(<div className="data income">
                            <div className="discription">{value.discription}</div>
                            <div className="amount">{value.amount}</div>
                            <div className="deletethis" onClick={(a)=>{deleteData(a.target.value);}} value={key}><img src={delicon} alt="Delete Icon" width="20px" height="20px"/></div>
                        </div>)               
                    }
            })
        )
    }


    // this function will create new entry in our data state
    function addData(){

        setEntries(entries+1);                  // increasing the entry number
        let type = document.getElementById("type");    //getting the type of amount
        let discription = document.getElementById("discription");       //getting the discription of amount
        let amount = document.getElementById("amount");                 //getting the 
        let gettingData = data;     // storing our old data into new variable 
        gettingData[type.value+entries] = {"amount":amount.value,"discription":discription.value};      //adding new object in our new vriable(gettingData)
        setData(gettingData); //setting the data in our old dataState

        //this statement will check if the amount is expense or income
        if(type.value === "expense"){
            var newBalance = balance-parseInt(amount.value)
            setExpense(parseInt(expense)+parseInt(amount.value));
        }else{
            var newBalance = balance+parseInt(amount.value)
            setIncome(parseInt(income)+parseInt(amount.value));
        }
        setBalance(newBalance)  //setting the balance
        percentageCalulartorProgressBar();
    }

    function deleteData(delid){
        let gettingData = data;
        console.log(gettingData.income2)
        // delete gettingData[props.value];
        console.log(gettingData);
        console.log(delid)
    }

    return(
        <div className="interface">
            <div className="data">
                <div className="top">
                    <div className="inside">
                        <div className="dashes">
                            <div className="dash"></div>
                            <div className="dash"></div>
                            <div className="dash"></div>
                        </div>
                        <h3>{datename()}</h3>
                        <div className="inoutcome">
                            <h4><span className="small">INCOME</span> ${income}</h4>
                            <div>
                                <Circle percent={percentageCalulartorProgressBar()} strokeWidth="5" trailWidth="1" strokeColor="#D3D3D3" className=""  width="50px"  className="balance"/>
                            </div>
                            <h4><span className="small">EXPENSE</span> ${Math.abs(expense)}</h4>
                        </div>
                        <h4><span className="small">BALANCE</span> ${balance}</h4>
                    </div>
                </div>
                    <div className="inoutdisplay">
                        <div className="showdate">{datename()}</div>
                        <div className="income"><span className="small">INCOME</span><br/>${income}</div>
                        <div className="expense"><span className="small">EXPENSE</span><br/>${expense}</div>
                    </div>
                <div className="history">
                    <h3>RECENT</h3>
                    {displayData()}
                </div>
            </div>
            <div className="modal hide" id="modal">
                <h2>Add</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <select id="type">
                                    <option value="income">INCOME</option>
                                    <option value="expense">EXPENSE</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" required id="discription" placeholder="Discription"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="number" required id="amount" placeholder="Amount"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button onClick={()=>{addData()}}>Add</button>
                            <button onClick={()=>{closeModal()}}>Close</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="addbutton" onClick={()=>{openModal()}}>+</div>
        </div>
    );
}