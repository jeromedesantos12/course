# Perbandingan React vs DOM Vanilla

| Fitur                  | React                   | DOM Vanilla                        |
| ---------------------- | ----------------------- | ---------------------------------- |
| State management       | useState                | Manual variable + DOM manipulation |
| Lifecycle (on mount)   | useEffect(() => {}, []) | DOMContentLoaded event listener    |
| UI update              | Declarative via JSX     | Imperative via textContent         |
| Button state (loading) | Conditional rendering   | Manual disabled and textContent    |

📄 [Lihat file HTML](./index.html)
