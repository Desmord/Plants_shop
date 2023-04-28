import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './Redux/store';

import Main from './Components/Pages/Main/Main';
import Cart from './Components/Pages/Cart/Cart';
import Order from './Components/Pages/Order/Order';
import Product from './Components/Pages/Product/Product';
import Header from './Components/Features/Header/Header';
import Footer from './Components/Features/Footer/Footer';
import LocalStorageLoad from './CustomHooks/LocalStorageLoad';

import styles from './Main.module.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Provider store={store}>
          <LocalStorageLoad />
          <Header />
          <Routes>
            <Route path={`/`} element={<Main />} />
            <Route path={`/Cart`} element={<Cart />} />
            <Route path={`/Product/:id`} element={<Product />} />
            <Route path={`/Order`} element={<Order />} />
            <Route path='*' element={<Main />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
