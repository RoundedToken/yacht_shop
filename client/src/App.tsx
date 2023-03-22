import React from 'react';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { routerApi } from './services/routerService';
import './app.scss';

function App() {
    const { isSuccess, isLoading } = routerApi.useFetchAllIdQuery();

    return (
        <div className="App">
            {isLoading && <h1>Loading...</h1>}
            {isSuccess && (
                <>
                    <Header />
                    <Body />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
