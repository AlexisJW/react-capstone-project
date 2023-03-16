// import './sass/index.scss';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
// import store and provider
import { Provider } from 'react-redux';
import store from './redux/store';
import './sass/index.scss';
import Layout from './components/Layout';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
