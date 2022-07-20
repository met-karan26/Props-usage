import React from "react";
import Cards from "./card";
import contact from "../contacts";

function App() {
  console.log(contact);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
     <Cards
     name={contact[0].name}
     img={contact[0].imgURL}
     tel={contact[0].phone}
     email={contact[0].email}
     />

<Cards
     name={contact[1].name}
     img={contact[1].imgURL}
     tel={contact[1].phone}
     email={contact[1].email}
     />

<Cards
     name={contact[2].name}
     img={contact[2].imgURL}
     tel={contact[2].phone}
     email={contact[2].email}
     />
  
    </div>
  );
  }

export default App;
