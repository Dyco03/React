import { useState, useContext } from "react"
import { FirebaseContext }from '../Firebase/index'
import { Link,useNavigate } from "react-router-dom";

export default function Signup(props){

    console.log(props)
    
    const firebase = useContext(FirebaseContext); //le context firebase


    const data = {
        pseudo : '',
        email : '',
        password : '',
        confirmPassword : '',
    }

    //les states
    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('');

    //navigation
    const navigate = useNavigate();

    //les fonctions
    const handleChange = e => {
        setLoginData({...loginData,[e.target.id]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {email, password} = loginData;
        firebase.signupUser(email,password)
        .then(user => {
            setLoginData({...data}); // on efface les valeurs car déjà fait
            navigate('/welcome')
        })
        .catch(error => {
            setError(error);
            setLoginData({...data}); // on efface les valeurs il y a une erreur
            
        })
    }

    const {pseudo, email, password, confirmPassword} = loginData;

   const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
    ? <button disabled>Incscription</button> : <button>Inscription</button>

    // gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>

    return(
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                    <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            
                        <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required/>
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required/>
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required/>
                                <label htmlFor="confirmPassword">Confirmer le Mot de passe</label>
                            </div>

                            {btn}

                        </form>

                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déjà inscrit? Connectez-vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}