import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterInit } from "../utilities/routerInit";
import HomePage from "../pages/home/page";
import Page from "./routerTitle";
import PrivacyPolicy from "../pages/privacy-policy/page";

const PageRoutes = () => {
    return (
        <Router>
            <RouterInit />
            <Routes>
                <Route path="/" element={<Page title="Firman Maulana | Portfolio Website"><HomePage /></Page>} />
                <Route path="/privacy-policy" element={<Page title="BeaverPDF | Privacy Policy"><PrivacyPolicy /></Page>} />
            </Routes>
        </Router>
    );
};

export default PageRoutes;