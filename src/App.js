import ActivityCard from "./components/ActivityCard/ActivityCard";
import ContactCard from "./components/ContactCard/ContactCard";
import UserCard from "./components/UserCard/UserCard";
import OnBoardClients from "./components/OnBoardClients/OnBoardClients";
import ContactList from "./components/ContactList/ContactList";
import ChatSpace from "./components/ChatSpace/ChatSpace";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const list = [
    {id: 1, name: "Mac Garg", profilePic: "https://xsgames.co/randomusers/assets/avatars/male/37.jpg", email:"mg@gmail.com",designation:"Frontend Lead", isActive:false,isArchived: false},
    {id: 2, name: "Malika Singh", profilePic: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg", email:"ms@gmail.com",designation:"UI/UX Lead", isActive:true,isArchived: false},
    {id: 3, name: "Rohan Lal", profilePic: "https://xsgames.co/randomusers/assets/avatars/male/22.jpg", email:"rl@gmail.com",designation:"Associate Engineer, Mobile", isActive:false,isArchived: true},
    {id: 4, name: "Kriti Pual", profilePic: "https://xsgames.co/randomusers/assets/avatars/female/12.jpg", email:"kp@gmail.com",designation:"Junior Frontend Engineer", isActive:true,isArchived: false},
    {id: 5, name: "Rachel Jain", profilePic: "https://xsgames.co/randomusers/assets/avatars/female/29.jpg", email:"rj@gmail.com",designation:"Designer", isActive:true,isArchived: false},
    {id: 6, name: "Nikhil Talwar", profilePic: "https://xsgames.co/randomusers/assets/avatars/male/42.jpg", email:"nt@gmail.com",designation:"SRE Lead", isActive:false,isArchived: true}
]
  const [selectedId, setSelectedId] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState([{}]);

  useEffect(() => {
    const finalPerson = list.filter(function(ele){
      return ele.id === selectedId;
    })

    if(finalPerson.length === 0){
      setSelectedPerson([{id: 1, name: "Mac Garg", profilePic: "https://xsgames.co/randomusers/assets/avatars/male/37.jpg", email:"mg@gmail.com",designation:"Frontend Lead", isActive:false,isArchived: false}]);
    }else{
      setSelectedPerson(finalPerson);
    }
    console.log(finalPerson)

  },[selectedId])


  return (
    <div className="App">
        <div className="leftSide">
          {/* Left side */}
          <UserCard />
          <ContactList list = {list} setSelectedId = {setSelectedId}/>
        </div>

        <div className="middleSide">
          {/* Middle side */}
          <ChatSpace />
        </div>

        <div className="rightSide">
          {/* Right side */}
          <ContactCard selectedPerson = {selectedPerson}/> 
          <ActivityCard />
          <OnBoardClients />
        </div>
    </div>
  );
}

export default App;