import React, { useRef } from "react";
import teachersw, { users} from "../listTeachers";

import './login.css';
// import image1 from "../Assets/imag/6888606.jpg";

// import { useNavigate } from "react-router-dom";

export default function Login() {
  const inputName = useRef();
  const inputPass = useRef();

  // const useNavigategate=useNavigate();
  //
  function ok() {
    const data = (ev) => {
      const myName = inputName.current.value;
      const myPassword = inputPass.current.value;
      if (
        users.find(
          (user) => users.name === myName && users.password === myPassword
        )
      ) {
        localStorage["username"] = myName;
        localStorage["userpass"] = myPassword;
        localStorage["isLogin"] = true;

        alert("נרשמת בהצלחה!");
      }
      //         // ניווט לדף הבית
      //         navigate('/home');
      //     }
      //     else {
      //         // ניווט לדף הרשמה
      // navigate('/Register');
      //     }

      // לא לרענן את הדף
      // ev.preventDefault();
    };
  }

  return (
    <div className="img">
      {/* <img src={image1} /> */}
      <h1>ברוכים הבאים לאתר הכרות בין תלמידים למורים</h1>
      <form onSubmit={ok}>
        Username :
        <input type="text" required ref={inputName} />
        <br></br><br></br>
       password:
        <input type="password" required ref={inputPass} />
        <br></br>
        <button>login</button>


        <h2>sign up</h2>
        phone:
        <input type="text" required ref={inputName}  />
        <br></br><br></br>
        mail:
        <input type="text" required ref={inputName} />
        <br></br><br></br>
        Username:
        <input type="text" required ref={inputName} />
        <br></br><br></br>
        password:
        <input type="text" required ref={inputName} />
        <br></br><br></br>
        Confirm Password:
        <input type="text" required ref={inputName} />

      </form>
    </div>
  );
}
 