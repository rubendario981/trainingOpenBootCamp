import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ContactListComponent></ContactListComponent>

        <TaskListComponent></TaskListComponent>
        
      </header>
    </div>
  );
}

export default App;
