import React, { useEffect } from 'react';
import Body from './modules/Body/Body';
import Footer from './modules/Footer/Footer';
import './App.scss';
import { navTreeApi } from './services/navTree';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { clearCategoryList } from './redux/navSlice';
import { setCartFromStorage } from './redux/cartSlice';
import { setFavoritesFromStorage } from './redux/favoritesSlice';
import ScrollToTop from './ScrollToTop';
import Modal from './modules/Modal/Modal';
import Header from './modules/Header/Header';
import SearchBar from './modules/SearchBar/SearchBar';
import MobileModal from './modules/MobileModal/MobileModal';

function App() {
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const [update, { isSuccess, isFetching, error }] = navTreeApi.useLazyFetchAllIdQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        update(lang);
        dispatch(clearCategoryList());
    }, [lang, dispatch, update]);

    //LocalStorage eventListener
    useEffect(() => {
        const takeFromStorage = () => {
            dispatch(setCartFromStorage(JSON.parse(localStorage.cartProductList)));
            dispatch(setFavoritesFromStorage());
        };

        window.addEventListener('storage', takeFromStorage);

        return () => {
            window.removeEventListener('storage', takeFromStorage);
        };
    }, [dispatch]);

    return (
        <div className="App">
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>`${JSON.stringify(error)}`</h1>}
            {isSuccess && !isFetching && (
                <div className="wrapper">
                    <ScrollToTop />

                    <Header />

                    <SearchBar />

                    <Body />

                    <Footer />

                    <Modal />

                    <MobileModal />
                </div>
            )}
        </div>
    );
}

export default App;
