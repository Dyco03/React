import { useState,useContext } from "react"
import { Link,Navigate, useNavigate } from "react-router-dom"
import { FirebaseContext }from '../Firebase/index'

export default function ForgetPassword(){

    const navigate = useNavigate();

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);//message de succès pour l'envoie de l'email
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(() => {
            setError(null);
            setSuccess(`Consultez votre email ${email} pour changer le mot de passe`);
            setEmail("");

            setTimeout(() => {
                navigate("/login");
            },5000)
        })
        .catch(error => {
            setSuccess(null);
            setError(error);
            setEmail("");
        })
    }

    const disabled = email === ""

    

    return(
        <div className="signUpLoginBox">
            <div className="slContainer">
            <div className="formBoxLeftForget">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        
                        {
                            success && <span 
                                style={{
                                border: "1px solid green",
                                background: "green",
                                color: "white"
                        }}
                        >
                            {success}
                        </span>
                        }

                        {
                            error && <span>{error.message}</span>
                        }

                        <h2>Mot de passe oublié?</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <button disabled={disabled}>Récupérer</button>

                        </form>

                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déjà inscrit? Connectez-vous.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}