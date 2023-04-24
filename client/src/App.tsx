import React, { useEffect } from 'react';
import Body from './modules/Body/Body';
import Footer from './modules/Footer/Footer';
import Header from './modules/Header/Header';
import './App.scss';
import Order from './modules/Order/Order';
import { navTreeApi } from './services/navTree';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { clearCategoryList } from './redux/navSlice';
import SideBar from './modules/SideBar/SideBar';
import { setCartFromStorage } from './redux/cartSlice';
import { setFavoritesFromStorage } from './redux/favoritesSlice';
import ScrollToTop from './ScrollToTop';
import Search from './modules/Search/Search';

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
            dispatch(setCartFromStorage());
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

                    <SideBar />

                    <Body />

                    <Footer />

                    <Order />

                    <Search />
                </div>
            )}
        </div>
    );
}

export default App;
