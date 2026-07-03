import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterInit } from "../utilities/routerInit";
import HomePage from "../pages/home/page";
import Page from "./routerTitle";

const PageRoutes = () => {
    return (
        <Router>
            <RouterInit />
            <Routes>
                <Route path="/" element={<Page title="Firman Maulana | Portfolio Website"><HomePage /></Page>} />
            </Routes>
        </Router>
    );
};

export default PageRoutes;