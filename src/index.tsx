import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import { store } from './redux';
// import CodeCell from './components/CodeCell';
import TextEditor from './components/TextEditor';

const App = () => {
  return (
    <Provider store={store}>
      <div><TextEditor /></div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
