import { useState, useEffect,useContext } from "react"
import { FirebaseContext }from '../Firebase/index'
import { Link,useNavigate } from "react-router-dom";

export default function Login(){

    const firebase = useContext(FirebaseContext);
    //notre state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(password.length > 5 && email !== ''){
            setBtn(true);
        }
        else if (btn) {
            setBtn(false)
        }
    }, [password,email,btn]);

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        firebase.loginUser(email,password)
        .then(user => {
            setEmail('');
            setPassword('');
            navigate('/welcome')
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
    }

    const displayBtn = btn ? <button>Connexion</button> : <button disabled>Connexion</button>

    return(
        <div className="signUpLoginBox">
            <div className="slContainer">
            <div className="formBoxLeftLogin">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        
                        {error !== '' && <span>{error.message}</span>}

                        <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required/>
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            {displayBtn}

                        </form>

                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Nouveau sur Marvel Quiz ? Inscrivez-vous maintenant.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}