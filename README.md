## “Updating an object via context”, is teaching a deeper concept about how to share and update stateful objects through React Context

## Analysis code

```
const [user, setUser] = useState(() => {
  const saved = localStorage.getItem("user");
  return saved ? JSON.parse(saved) : null;
});
```
