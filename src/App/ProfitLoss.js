import React, { useContext } from 'react';
import {IncomeCon,ExpenseCon,DateDayCon,DateMonthCon} from '../ContextData/Context'

function ProfitLoss(){
    let [Income,] = useContext(IncomeCon);
    let [Expense,] = useContext(ExpenseCon);
    let [DateDay,setDateDay] = useContext(DateDayCon);
    let [DateMonth,setDateMonth] = useContext(DateMonthCon);


    function UpdateMonth(GetMonth){
        setDateMonth(GetMonth)
    }
    function UpdateDay(GetDay){
        setDateDay(GetDay);
    }
    console.log(DateDay+"="+DateMonth);
    
    return(
        <>
            <div className="dates">
                <select value={DateMonth} onChange={(e)=>{UpdateMonth(e.target.value);}}>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
                <select style={{margin:"0px 5px"}} value={DateDay} onChange={(e)=>{UpdateDay(e.target.value);}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
            </div>
            <div className="inoutdisplay">
                <div className="showdate">{DateMonth}<br/> {DateDay}</div>
                <div className="income"><span className="small">INCOME</span><br/>${Income}</div>
                <div className="expense"><span className="small">EXPENSE</span><br/>${Expense}</div>
            </div>
        </>
    )
}
export default ProfitLoss;