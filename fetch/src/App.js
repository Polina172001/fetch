import './App.css';
import Fetch from './HOC/fetch';
import Test from './components/Test';

const url = (anchor) => (process.env.REACT_APP_URL + anchor)
function App() {
  return (
    <div className="App">
      <div><TestError /></div>
      <div><TestData /></div>
      <div><TestLoading /></div>
    </div>
  );
}

const TestError = Fetch(url)(Test, 'error')
const TestData = Fetch(url)(Test, 'data')
const TestLoading = Fetch(url)(Test, 'loading')

export default App;
