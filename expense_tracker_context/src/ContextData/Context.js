import React, { createContext, useState } from 'react';

let IncomeCon = createContext()
let ExpenseCon = createContext()
let EntriesCon = createContext()
let DataCon = createContext();

function CreateData(props){
    let [Income,setIncome] = useState(0);
    let [Expense,setExpense] = useState(0);
    let [Entries,setEntries] = useState(0);
    let [Data,setData] = useState({});

    return(

            <IncomeCon.Provider value={[Income,setIncome]}>
                <ExpenseCon.Provider value={[Expense,setExpense]}>
                    <EntriesCon.Provider value={[Entries,setEntries]}>
                        <DataCon.Provider value={[Data,setData]}>
                            {props.children}
                        </DataCon.Provider>
                    </EntriesCon.Provider>
                </ExpenseCon.Provider>
            </IncomeCon.Provider>

    )
}

export default CreateData;
export {IncomeCon,ExpenseCon,EntriesCon,DataCon}