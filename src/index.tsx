import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

// import CodeCell from './components/CodeCell';
import TextEditor from './components/TextEditor';

const App = () => {
  return <div><TextEditor /></div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
