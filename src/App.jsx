import styled from 'styled-components'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './index.css'

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
`

function App() {

  return (
    <Wrapper>
      <Form /> 
      <TodoList />   
    </Wrapper>
  )
}

export default App
