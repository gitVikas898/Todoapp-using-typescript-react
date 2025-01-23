import './App.css'
import Input from './components/Input'

//Types in Typescript 


const App : React.FC = () =>{
  return (
    <div className='App'>
          <h1 className='heading'>Taskify</h1>
          <Input/>
    </div>
  )
}
export default App
