import  Header  from "./components/Header";
import TeamList from "./components/TeamList";
import Form from "./components/Form"
import { useState } from "react";

function App() {

  const [members, setMembers] = useState([])

  const submitNewMember = (newMember) => {
    console.log(newMember)
    setMembers([...members, newMember])
  }

  return (
    <main>
      <Header/>
      <Form submitMember={member => submitNewMember(member)}/>
      <TeamList/>
      
    </main>
  )
}

export default App
