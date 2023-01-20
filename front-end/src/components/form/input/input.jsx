import "./input.css"

export default function Input(props) {
    return(
        <>
        <table>
        <tr>
        <td>
        <label htmlFor={props.name}>{props.label}</label>
        </td>
        <td>
        <input
          className="input"  
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.onChange}
          value={props.value}
          />
          </td>
          </tr>
          </table>
        <br/>
          </>
    )
}