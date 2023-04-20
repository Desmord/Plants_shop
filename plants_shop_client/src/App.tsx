import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Redux/store';

import Main from './Components/Pages/Main/Main';
import Cart from './Components/Pages/Cart/Cart';
import Order from './Components/Pages/Order/Order';
import Product from './Components/Pages/Product/Product';

import styles from './Main.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path={`/`} element={<Main />} />
            <Route path={`/Cart`} element={<Cart />} />
            <Route path={`/Product/:id`} element={<Product />} />
            <Route path={`/Order`} element={<Order />} />
            <Route path='*' element={<Main />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
