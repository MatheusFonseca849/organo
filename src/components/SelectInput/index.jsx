
const SelectInput = ({teams, label, value, userInput}) => {

return (
<div>
    <label htmlFor={label}>{label}</label>

    <select id={label} onChange={e => userInput(e.target.value)}>
        <option value="placeholder">Selecione um time</option>
        {teams.map((team) => {
            return(
                <option key={team}>{team}</option>
            )
        })}
    </select>
</div>

)

}

export default SelectInput