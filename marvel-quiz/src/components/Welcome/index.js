import { useState, useContext, Fragment, useEffect } from "react"
import { FirebaseContext }from '../Firebase/index'
import Logout from "../Logout"
import Quiz from "../Quiz"

export default function Welcome(){

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);




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