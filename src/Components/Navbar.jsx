import { useContext } from "react";
import { CurrentUserContext } from "../hooks/currentUserContext";

function Navbar() {
  const { user } = useContext(CurrentUserContext);

  return (
    <nav>
      {user ? (
        <span>Logged in as {user.name}</span>
      ) : (
        <span>Not logged in</span>
      )}
    </nav>
  );
}

export default Navbar;
