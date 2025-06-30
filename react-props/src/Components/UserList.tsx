import React from "react";
import UserCard from "./UserCard";

const UserList = () => {

  const userList = [
    { name: "Alex Dunphy", age: 15, location: "Los Angeles", isActive: true },
    { name: "Manny Delgado", age: 12, location: "Colombia", isActive: true },
    { name: "Luke Dunphy", age: 12, location: "Los Angles", isActive: false },
    { name: "Halley Dunphy", age: 18, location: "California", isActive: false }
  ]

  const handleCardClick = (name: string): void => {
    alert(`${name}'s Card is Clicked`);
  }

  return(
    <div>
      <h3>User List</h3>
      <div id="user-card-container">
        {
          userList.map((user, idx) => (
            <UserCard
              key={idx}
              name={user.name}
              age={user.age}
              location={user.location}
              isActive={user.isActive}
              onCardClick={() => handleCardClick(user.name)}
            />
          ))
        }
      </div>
    </div>
  )
 
}

export default UserList;