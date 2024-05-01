import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home, Products} from "../pages/index.js";

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/products" element={<Products />}/>
            </Routes>
        </BrowserRouter>
    )
}