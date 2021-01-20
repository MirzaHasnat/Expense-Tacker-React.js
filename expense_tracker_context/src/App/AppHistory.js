import React, { useContext } from 'react';
import {DataCon} from '../ContextData/Context';

function AppHistory(){
    let [Data,] = useContext(DataCon);

    function arrangeData(){
        return(
            Object.entries(Data).map(([key,value])=>{
                if(key.startsWith("expense")){
                    return(
                        <div className="data expense" key={key}>
                            <div className="discription">{value.discription}</div>
                            <div className="amount">${value.amount}</div>
                        </div>
                    );
                }else if(key.startsWith("income")){
                    return(
                        <div className="data income" key={key}>
                            <div className="discription">{value.discription}</div>
                            <div className="amount">${value.amount}</div>
                        </div>
                    );
                }else {
                    return <h1>No Data</h1>
                }        
            })
        )
    }
    return(
    <div className="history">
        <h3>RECENT</h3>
        {arrangeData()}
    </div>
    )
}

export default AppHistory