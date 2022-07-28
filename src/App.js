import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_info';
import LoginForm from './components/pure/forms/loginForm';
import RegisterForm from './components/pure/forms/registerForm'
// import GrettinStyled from './components/pure/forms/greetingStyled';
// import ComponenteConContexto from './hooks/ejemplo1';
// import {CycleDidMount, CycleDidMountAF} from './hooks/lifeCycles/testingTypesCycles'
// import Clock from './components/container/excercises4-5-6';
// import Father from './components/container/father';
// import Exercises10To12 from './components/container/Exercises10-11-12'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <Father/> 
        <Clock/>
        <GrettinStyled name='Tito'/>
        
        <CycleDidMount/>
        <CycleDidMountAF/>
        <ComponenteConContexto/>
        <Exercises10To12/>
      <LoginForm></LoginForm>
      <RegisterForm/>
      </header> */}
      {/* <ContactListComponent></ContactListComponent>   */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
