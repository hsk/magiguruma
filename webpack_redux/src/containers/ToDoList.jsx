import { connect } from 'react-redux';
import ToDoListComponent from '../components/ToDoListComponent.jsx';

export default connect((state)=>({todos:state.todos}))(ToDoListComponent)
