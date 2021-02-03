import React, { useContext, useState } from 'react';
import {Auth,GoogleAuth,FacebookAuth} from '../firebase/FirebaseConfig';
import {UserAuthCon} from '../ContextData/Context';

function AppLogin(){

    let [isError,setisError] = useState();
    let [errorMsg,seterrorMsg] = useState("")
    let [isBtnDis,setisBtnDis] = useState(0);

    let [,setUserAuth] = useContext(UserAuthCon);
    console.log(localStorage.getItem("UserAuth"));
    function FacebookLogin(){
        setisBtnDis(1);
        setisError(0);
        Auth.signInWithPopup(FacebookAuth).then((success)=>{
            setUserAuth(success);
            setisBtnDis(0);
            localStorage.setItem("UserAuth",JSON.stringify(success)); // setting up user data on localstorage for future use
        }).catch((error)=>{
            setisError(1);
            seterrorMsg(error.message)
            setisBtnDis(0);
            
        })
        console.log(localStorage.getItem("UserAuth"));
    }
    function GoogleLogin(){
        setisBtnDis(1);
        setisError(0);
        Auth.signInWithPopup(GoogleAuth).then((success)=>{
            setUserAuth(success);
            setisBtnDis(0);
            localStorage.setItem("UserAuth",JSON.stringify(success)); // setting up user data on localstorage for future use
        }).catch((error)=>{
            setisError(1);
            seterrorMsg(error.message)
            setisBtnDis(0);
        })
        console.log(localStorage.getItem("UserAuth"));
    }
    return(
        <div className="loginform">
            <table>
                <caption>Login</caption>
                <tbody>
                    <tr>
                        <td>
                            {isBtnDis?
                                <>
                                    <button className="logbtn googlebtn" onClick={()=>{GoogleLogin()}} style={{background:"gray",color:"white"}} disabled>Logining....</button>
                                    <button className="logbtn facebookbtn" onClick={()=>{FacebookLogin()}} style={{background:"gray",color:"white"}} disabled>Logining....</button>
                                </>
                                :
                                <>
                                    <button className="logbtn googlebtn" onClick={()=>{GoogleLogin()}}>Login With Gmail</button>
                                    <button className="logbtn facebookbtn" onClick={()=>{FacebookLogin()}}>Login With Facebook</button>
                                </>
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
            {isError?<p style={{color:"red",padding:"0px 0px 10px 0px"}}>{errorMsg}</p>:<p></p>}
        </div>
    );
}
export default AppLogin