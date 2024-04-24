import { useReducer } from 'react'
import { INITIAL_STATE, postReducer } from './post-reducer'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleClick = () => {
    dispatch({ type: "FETCH_START" })
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        // data handle
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data
        })
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR" })
      })
  }

  return (
    <section>
      <button onClick={handleClick}>
        {state?.loading ? "Wait..." : "Fetch Post"}
      </button>
      <p>{state?.posts.title}</p>
      <span>{state?.error && "Something went wrong !!"}</span>
    </section>
  )
}

export default App
