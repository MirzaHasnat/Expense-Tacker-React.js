import React, { createContext, useState } from 'react';

let IncomeCon = createContext()
let ExpenseCon = createContext()
let AllExpenseCon = createContext();
let AllIncomeCon = createContext();
let EntriesCon = createContext()
let DataCon = createContext();
let UserAuthCon = createContext();
let DateMonthCon = createContext();
let DateDayCon = createContext();

function CreateData(props){
    let [Income,setIncome] = useState(0);
    let [Expense,setExpense] = useState(0);
    let [Entries,setEntries] = useState(0);
    let [Data,setData] = useState([]);
    let [UserAuth,setUserAuth] = useState(null);
    let [AllExpense,setAllExpense] = useState(0);
    let [AllIncome,setAllIncome] = useState(0);


    function getDate(){
        const date = new Date();  // creating new date object
        const month = date.toLocaleString('default', { month: 'short' }); // getting month
        const day = date.getDate() //getting date
        return [month,day] // currentMonth currentDay

    }
    let [DateMonth,setDateMonth] = useState(getDate()[0]);
    let [DateDay,setDateDay] = useState(getDate()[1]);


    return(
        <UserAuthCon.Provider value={[UserAuth,setUserAuth]}> {/*Context for user autheticating */}
            {/* ========================================================== */}
            <DateMonthCon.Provider value={[DateMonth,setDateMonth]}>
                <DateDayCon.Provider value={[DateDay,setDateDay]}>
                    <AllExpenseCon.Provider value={[AllExpense,setAllExpense]}>
                        <AllIncomeCon.Provider value={[AllIncome,setAllIncome]}>
                            <IncomeCon.Provider value={[Income,setIncome]}>
                                <ExpenseCon.Provider value={[Expense,setExpense]}>
                                    <EntriesCon.Provider value={[Entries,setEntries]}>
                                        <DataCon.Provider value={[Data,setData]}>
                                            {props.children}
                                        </DataCon.Provider>
                                    </EntriesCon.Provider>
                                </ExpenseCon.Provider>
                            </IncomeCon.Provider>
                        </AllIncomeCon.Provider>
                    </AllExpenseCon.Provider>
                </DateDayCon.Provider>
            </DateMonthCon.Provider>
            {/* =========================================================== */}
        </UserAuthCon.Provider>
    )
}

export default CreateData;
export {UserAuthCon,IncomeCon,ExpenseCon,EntriesCon,DataCon,DateMonthCon,DateDayCon,AllIncomeCon,AllExpenseCon}