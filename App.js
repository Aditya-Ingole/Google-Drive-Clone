import { useState } from "react";
import Data from "./Data";
import { auth, provider } from "./firebase";
import Header from "./Header";
import Sidebar from "./Sidebar";



function App() {
  const [user, setUser] = useState(null)

  const signIn=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user)
    }).catch(error=>{
      alert(error.message);
    })
  }

  return (
    <>
    {
      user ? (
        <>
        <Header photoURL={user.photoURL}/>
        <div className="App">
        <Sidebar/>
        <Data/>
      </div>

        </>
      ) : (
        <div className="loginWrap" >
        <img scr="./image/drive-img.svg"/>
        <button onClick={signIn}>Login to Google Drive Clone</button>
           
        </div>
      )
    }
   
    </>
  );
}

export default App;

