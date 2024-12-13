import React from 'react'
import Counter from './components/Count'
import { useDispatch } from 'react-redux'
import Menu from './components/menu'
import { increment, decrement } from './redux/actions'

const App = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={e => dispatch(increment)}>Increment</button>
      <Counter />
      <button onClick={e => dispatch(decrement)}>Decrement</button>
      <Menu />
    </div>
  )
}

export default App