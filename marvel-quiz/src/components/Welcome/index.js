import { useState, useContext, Fragment, useEffect } from "react"
import { FirebaseContext }from '../Firebase/index'
import { useNavigate } from "react-router-dom"
import Logout from "../Logout"
import Quiz from "../Quiz"


export default function Welcome(){

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        let listener = firebase.onAuthStateChanged(user => {
            user ? setUserSession(user) : navigate('/')
        })

        return () => {
            listener()
        }; 

    },[])


    return userSession === null ? (
        <Fragment>
            <div className="loader"></div>
            <p>Loading ...</p>
        </Fragment>
    ) : (
        <div className="quiz-bg">
            <div className="container">
                <Logout/>
                <Quiz/>
            </div>
        </div>
    )
}