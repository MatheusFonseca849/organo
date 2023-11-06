import Input from "../Input";
import SelectInput from "../SelectInput";

const Form = () => {
    
    const teams = [
        'Programação',
        'Front End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (


        <form>
            <h2>Preencha os dados para criar o card do colaborador.</h2>

            <Input  label='Nome' placeholder="Digite o nome" type="text" required={true}/>
            <Input  label='Cargo' placeholder="Digite o cargo" type="text" required={true}/>
            <Input  label='Imagem' placeholder="Digite o endereço da imagem" type="text" required={true}/>
            <SelectInput teams={teams} label="Time"/>
            
        </form>

    )

}

export default Form