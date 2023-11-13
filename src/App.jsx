import  Header  from "./components/Header";
import TeamList from "./components/TeamList";
import Form from "./components/Form"
import { useState } from "react";

function App() {

  const [teams, setTeams] = useState([

    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#DFF7E9',
      members:[]
    },

    {
      name: 'Front End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
      members:[]
    },

    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
      members:[]
    },

    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
      members:[]
    },

    {
      name: 'UX e UI',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
      members:[]
    },

    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
      members:[]
    },

    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
      members:[]
    },

    

  ])

  const [members, setMembers] = useState([])

  // const submitNewMember = (newMember) => {
  //   console.log(newMember)
  //   setMembers([...members, newMember])
  // }

  const submitNewMember = (newMember) => {

    console.log(newMember)

    setTeams(teams.map(team => team.name === newMember.team ? { ...team, members:[...members, newMember]} : team))
    console.log(teams)
  }

  return (
    <main>
      <Header/>
      <Form submitMember={member => submitNewMember(member)} teamNames={teams.map(team => team.name)}/>
      <TeamList teams={teams} setTeams={setTeams} members={members} setMembers={setMembers}/>
      
    </main>
  )
}

export default App
