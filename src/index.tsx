import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { store } from './redux';
import CellList from './components/CellList';

const App = () => {
  return (
    <Provider store={store}>
      <div><CellList /></div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
