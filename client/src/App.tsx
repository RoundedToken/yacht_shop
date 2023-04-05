import React from 'react';
import Body from './modules/Body/Body';
import Footer from './modules/Footer/Footer';
import Header from './modules/Header/Header';
import { routerApi } from './services/routerService';
import './App.scss';
import Order from './modules/Order/Order';

function App() {
    const { isSuccess, isLoading, error } = routerApi.useFetchAllIdQuery();

    return (
        <div className="App">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>`${JSON.stringify(error)}`</h1>}
            {isSuccess && (
                <div className="wrapper">
                    <Header />

                    <Body />

                    <Footer />

                    <Order />
                </div>
            )}
        </div>
    );
}

export default App;
