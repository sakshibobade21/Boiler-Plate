import React from "react";
import "./componentStyle.css"

interface UserCardProps {
  name: string;
	age: number;
	location?: string;
	isActive: boolean;
	onCardClick?: (name: string) => void; 
}

const UserCard: React.FC<UserCardProps> = (props) => {

	const { name, age, location = "Not Specfied", isActive = false, onCardClick = () => {} } = props;

	return (
		<div id="user-card" onClick={() => onCardClick(name)}>
			<h3>Name: {name}</h3>
			<p>Age: {age}</p>
			<p>Location: {location}</p>
		</div>
	)
}

export default UserCard;