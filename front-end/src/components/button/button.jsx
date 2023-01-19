import { Link } from "react-router-dom"

export default function Button(props) {
    console.log("++++++", props)
    const language = sessionStorage.setItem('language', props.language)

    return (
        <div className="botao-login">
                    <button>
                        <Link to={props.to} id="login-cadastrar" language={props.language} type="submit">{props.text} </Link>
                    </button>
                </div>
    )
    }