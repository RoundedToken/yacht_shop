import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

const instance = createInstance({
    urlBase: 'https://teine.duckdns.org/matomo/',
    siteId: 1,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = setupStore();

root.render(
    //@ts-ignore
    <MatomoProvider value={instance}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </MatomoProvider>
);
