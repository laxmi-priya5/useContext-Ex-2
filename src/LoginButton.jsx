export default function LoginButton() {
  const { user, setUser } = useContext(CurrentUserContext);

  if (user) {
    return <button onClick={() => setUser(null)}>Log out</button>;
  }

  return <button onClick={() => setUser({ name: "Laxmipriya" })}>Log in</button>;
}