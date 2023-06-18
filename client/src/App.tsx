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
import AppLoading from './AppLoading';
import { useLocation } from 'react-router-dom';
import { routeConstants } from './models/enums/EConstants';
import { setListMode } from './redux/sideBarSlice';

function App() {
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const [update, { isSuccess, isFetching, error }] = navTreeApi.useLazyFetchAllIdQuery();
    const dispatch = useDispatch();
    const location = '/' + useLocation().pathname.split('/')[1];
    const displayMode = useSelector((state: RootState) => state.sideBarSlice.listMode);

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

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 750) {
                dispatch(setListMode('grid'));
            }
        });

        window.addEventListener('error', (e) => {
            if (e.message === 'ResizeObserver loop limit exceeded') {
                const resizeObserverErrDiv = document.getElementById(
                    'webpack-dev-server-client-overlay-div'
                );
                const resizeObserverErr = document.getElementById(
                    'webpack-dev-server-client-overlay'
                );
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                }
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            {isFetching && <AppLoading />}
            {error && <h1>`${JSON.stringify(error)}`</h1>}
            {isSuccess && !isFetching && (
                <div
                    className="wrapper"
                    style={
                        location === routeConstants.CART_ROUTE
                            ? { backgroundColor: 'rgb(211, 240, 243)' }
                            : location === routeConstants.FAVORITES_ROUTE
                            ? { backgroundColor: 'rgb(252, 248, 211	)' }
                            : location === routeConstants.CRIMPING_ROUTE ||
                              location === routeConstants.PRODUCT_ROUTE ||
                              location === routeConstants.CONTACTS_ROUTE ||
                              (location === routeConstants.PRODUCT_LIST_ROUTE &&
                                  displayMode === 'table')
                            ? { backgroundColor: 'white' }
                            : {}
                    }
                >
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
