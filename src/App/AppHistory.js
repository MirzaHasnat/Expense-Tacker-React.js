import React, { useContext } from 'react';
import {DataCon,DateMonthCon,DateDayCon} from '../ContextData/Context';
import delimg from '../delete.png';
import firebase from '../firebase/FirebaseConfig';

function AppHistory(){
    let [Data,] = useContext(DataCon);
    let [DateMonth,] = useContext(DateMonthCon);
    let [DateDay,] = useContext(DateDayCon);

    function arrangeData(){
        return(
            Data.map((row)=>{
                if(row.type === "expense"){
                    return(
                        <div className="data expense" key={row.id}>
                            <div className="date">{row.dateday} {row.datemonth}</div>
                            <div className="discription">{row.discription}</div>
                            <div className="amount">${parseInt(row.amount)}</div>
                            <div className="deletethis" onClick={()=>{deleteData(row.id)}}><img src={delimg} alt="delete " width="20px"/></div>
                        </div>
                    );
                }else if(row.type === "income"){
                    return(
                        <div className="data income" key={row.id}>
                            <div className="date">{row.dateday} {row.datemonth}</div>
                            <div className="discription">{row.discription}</div>
                            <div className="amount">${parseInt(row.amount)}</div>
                            <div className="deletethis" onClick={()=>{deleteData(row.id)}}><img src={delimg} alt="delete " width="20px"/></div>
                        </div>
                    );
                }else {
                    return <h1>No Data</h1>
                }        
            })
        )
    }

    function deleteData(delid){
        let dataObject = firebase.database().ref(`/data/${delid}`)
        dataObject.remove();
    }

    //returing the data to render
    return(
    <div className="history">
        <h3>Data Of {DateMonth+" "+DateDay}</h3>
        {arrangeData()}
    </div>
    )
}

export default AppHistory