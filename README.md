## “Updating an object via context”, is teaching a deeper concept about how to share and update stateful objects through React Context

## Analysis code

```
const [user, setUser] = useState(() => {
  const saved = localStorage.getItem("user");
  return saved ? JSON.parse(saved) : null;
});
```

- Normally you pass a value directly, like useState(null).
- But here you’re passing a function instead.
- React will call this function only once (on the first render) to compute the initial state.
- This is called lazy initialization — useful when the initial value requires some work (like reading from localStorage).
