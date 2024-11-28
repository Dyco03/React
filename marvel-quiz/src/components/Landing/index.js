import { useRef,useEffect,useState,Fragment } from "react"
import { Link } from "react-router-dom";


export default function Landing(){

    const [btn,setBtn] = useState(false);

    const refWolverine = useRef(null);

    useEffect(()=>{
        refWolverine.current.classList.add("startingImg");
        setTimeout(()=>{
            refWolverine.current.classList.remove("startingImg");
            setBtn(true);
        },1000)
    },[]);
 
    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg");
    }

    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg");
    }

    const clearImg = () => {
        if(refWolverine.current.classList.contains("leftImg")){
            refWolverine.current.classList.remove("leftImg");
        }
        else if(refWolverine.current.classList.contains("rightImg")){
            refWolverine.current.classList.remove("rightImg");
        }
    }

    const displayBtn = btn && (
        <Fragment>
            <div onMouseOver={setLeftImg}  onMouseOut={clearImg}  className="leftBox">
                <Link className="btn-welcome" to="/signup">Incscription</Link>
            </div>
            <div onMouseOver={setRightImg}  onMouseOut={clearImg}  className="rightBox">
                <Link className="btn-welcome" to="/login">Connexion</Link>
            </div>
        </Fragment>
    )

    return(
        <main ref={refWolverine} className="welcomePage">
            { displayBtn }
        </main>
    )
}