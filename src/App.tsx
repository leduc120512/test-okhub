import { Routes, Route } from "react-router-dom";
import LandingPage from "./features/landing/LandingPage";

const Login = () => <h2>Login Page</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Products = () => <h2>Products</h2>;

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

        </Routes>
    );
}

export default App;