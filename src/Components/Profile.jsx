import { useContext } from "react";
import { CurrentUserContext } from "../hooks/currentUserContext";
export default function Profile() {
 const {user} = useContext(CurrentUserContext);
 return <p>{user ? `Welcome, ${user.name}!` : "Please log in."}</p>;

}