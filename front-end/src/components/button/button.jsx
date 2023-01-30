import { Link } from "react-router-dom"

export default function Button(props) {
    const language = sessionStorage.setItem('language', props.language)

    return (
        <div className="botao-login">
                    <button>
                        <Link to={props.to} id="login-cadastrar" color1={props.color1} color2={props.color2} language={props.language} type="submit">{props.text} </Link>
                    </button>
                </div>
    )
    }