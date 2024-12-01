import { useState, useEffect, useContext } from "react"
import { FirebaseContext }from '../Firebase/index'

export default function Logout(){
    //notre context firebase
    const firebase = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);

    //faire la déconnexion
    useEffect(() => {
        if (checked){
            firebase.signoutUser();
        }
    },[checked,firebase]);

    const handleChange = e => {
       setChecked(e.target.checked); 
    }

    return(
        <div className="logoutContainer">
            <label className="switch">
                <input
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}
