import Input from "../Input";
import SelectInput from "../SelectInput";
import Button from "../Button"
import { useState } from "react";

const Form = ({submitMember}) => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
    const teams = [
        'Programação',
        'Front End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

   const submitForm = (e) => {
    e.preventDefault()
    submitMember({
        name,
        job,
        image,
        team
    })
   }

    return (


        <form onSubmit={submitForm}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>

            <Input value={name} userInput={value => setName(value)} label='Nome' placeholder="Digite o nome" type="text" required={true}/>
            <Input value={job} userInput={value => setJob(value)} label='Cargo' placeholder="Digite o cargo" type="text" required={true}/>
            <Input value={image} userInput={value => setImage(value)} label='Imagem' placeholder="Digite o endereço da imagem" type="text" required={true}/>
            <SelectInput teams={teams} label="Time" value={team} userInput={value => setTeam(value)}/>
            <Button>Criar Card</Button>
            
        </form>

    )

}

export default Form