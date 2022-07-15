import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_info';
import GrettinStyled from './components/pure/forms/greetingStyled';
import ComponenteConContexto from './hooks/ejemplo1';
import {CycleDidMount, CycleDidMountAF} from './hooks/lifeCycles/testingTypesCycles'
import Clock from './components/container/excercises4-5-6';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock/>
        
        <GrettinStyled name='Tito'/>
        
        {/* <CycleDidMount/>
        <CycleDidMountAF/>
        <ComponenteConContexto/> */}
        <ContactListComponent></ContactListComponent>

        <TaskListComponent></TaskListComponent>
        
      </header>
    </div>
  );
}

export default App;
