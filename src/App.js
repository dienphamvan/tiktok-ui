import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/component/Layout';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let LayOut = DefaultLayout;
                        const Page = route.component;

                        if (route.layout) {
                            LayOut = route.layout;
                        } else if (route.layout === null) {
                            LayOut = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <LayOut>
                                        <Page />
                                    </LayOut>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
