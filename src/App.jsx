import Layout from "./components/Layout.jsx";
import {Global} from "./context/useGlobalState.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodosPage from "./pages/TodosPage.jsx";
import DonePage from "./pages/DonePage.jsx";
import Info from "./pages/Info.jsx";

export default function App() {
    // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
    return (
        <Global
            Root={() => (
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout/>}>
                                <Route exact path="/" element={<TodosPage/>}/>
                                <Route path="/done" element={<DonePage/>}/>
                                <Route path="/info" element={<Info/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            )}/>
    );
}
