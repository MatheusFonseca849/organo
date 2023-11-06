
const SelectInput = (props) => {

return (
<div>
    <label htmlFor={props.label}>{props.label}</label>

    <select id={props.label}>
        <option value="placeholder">Selecione um time</option>
        {props.teams.map((team) => {
            return(
                <option key={team} value={team.replace(/ /g, "").toLowerCase()}>{team}</option>
            )
        })}
    </select>
</div>

)

}

export default SelectInput