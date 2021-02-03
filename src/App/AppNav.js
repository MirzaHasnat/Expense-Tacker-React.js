import React, { useContext } from 'react';
import {Auth} from '../firebase/FirebaseConfig';
import {UserAuthCon} from '../ContextData/Context';

function Navbar(){
    function closemodal(){
        document.getElementById("navbar").style.left = "-1000px";
    }



let [UserAuth,setUserAuth] = useContext(UserAuthCon);
 function logoutUser(){
    Auth.signOut().then(()=>{
        setUserAuth(null);
        localStorage.removeItem("UserAuth");
    })
 }
    return(
        <>
        <div className="navbar" id="navbar">
            <div className="profile">
                <img src={UserAuth["user"]["photoURL"]} alt="" width="300px"/>
                <h3>{UserAuth.user.displayName}</h3>
            </div>
            <div className="nav-links">
                <button>About</button>
                <button>Contact Us</button>
                <button>Feedback</button>
                <button onClick={()=>{logoutUser()}}>Logout</button>
            </div>
            <div className="close-modal" onClick={()=>{closemodal()}}>X</div>
        </div>
        </>

    )
}

export default Navbar;