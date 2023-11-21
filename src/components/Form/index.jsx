import { StyledForm } from "./form.js";
import Input from "../Input";
import SelectInput from "../SelectInput";
import Button from "../Button"
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({submitMember, teamNames}) => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

   const submitForm = (e) => {
    e.preventDefault()
    submitMember({
        name,
        job,
        image,
        team,
        id: uuid()
    })
   }

    return (


        <StyledForm onSubmit={submitForm}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>

            <Input value={name} userInput={value => setName(value)} label='Nome' placeholder="Digite o nome" type="text" required={true}/>
            <Input value={job} userInput={value => setJob(value)} label='Cargo' placeholder="Digite o cargo" type="text" required={true}/>
            <Input value={image} userInput={value => setImage(value)} label='Imagem' placeholder="Digite o endereço da imagem" type="text" required={true}/>
            <SelectInput teams={teamNames} label="Time" value={team} userInput={value => setTeam(value)}/>
            <Button>Criar Card</Button>
            
        </StyledForm>

    )

}

export default Form