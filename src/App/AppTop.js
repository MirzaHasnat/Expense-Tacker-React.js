import React, { useContext } from 'react';
import {Circle} from 'rc-progress';
import {AllIncomeCon,AllExpenseCon} from "../ContextData/Context";
import Navbar from './AppNav';

function AppTop(){
    let [AllIncome,] = useContext(AllIncomeCon);
    let [AllExpense,] = useContext(AllExpenseCon);


    function calculatePercent() {
        let PercentFormula = ((100/AllIncome)*AllExpense).toFixed(2);
        return PercentFormula==="NaN" ? "0.00" : PercentFormula > 100 ? "100.00": PercentFormula ;
    }
    function calculateBalance(){
        let BalanceFormula = AllIncome-AllExpense;
        return BalanceFormula;
    }


    // this area will be continoued (under construction)
    // this fucntion will remove the active classes on the spans
    // function removeActive(){
    //     let spans = document.querySelectorAll(".days span")
    //     for(let i=0;i<spans.length;i++){
    //         if(spans[i].getAttribute.class === "active"){
    //             spans[i].classList.remove("active");
    //         }
    //     }

    // }
    // function active(e){
    //     removeActive();

    // }

    function openmodal(){
        document.getElementById("navbar").style.left = "0";
    }
    return(
        <>
            <Navbar/>
            <div className="top">
                <div className="inside">
                    <div className="menu-date">
                        <div className="dashes" onClick={()=>{openmodal()}}>
                            <div className="dash"></div>
                            <div className="dash"></div>
                            <div className="dash"></div>
                        </div>
                    <div>
                        Expesne Tracker
                    </div>
                    </div>
                    <div className="inoutcome">
                        <h4><span className="small">INCOME</span> ${AllIncome}</h4>
                        <div className="circle-graph">
                            <Circle percent={calculatePercent()} strokeWidth="8" gapDegree={80} gapPosition="bottom" strokeColor="#2986ff" width="50px"/>
                            <p style={{fontSize:"9px",color:"#2986ff",marginTop:"-13px"}}>{calculatePercent()}%</p>
                        </div>
                        <h4><span className="small">EXPENSE</span> ${AllExpense}</h4>
                    </div>
                    <h4 className="graph-balance"><span className="small">BALANCE</span> ${calculateBalance()}</h4>
                </div>
                <span className="topshadowone"></span>
                <span className="topshadowtwo"></span>
            </div>       
        </> 
    )
}
export default AppTop