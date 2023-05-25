import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./config/ProtectedRoutes";
import PrivateRoutes from "./config/PrivateRoutes";
import MainLayout from "./pages/MainLayout/MainLayout";
import AdminLayout from "./pages/AdminLayout/AdminLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/MainLayout/Home/Home";
import AdminDashboard from "./pages/AdminLayout/AdminDashboard/AdminDashboard";
import User from "./pages/AdminLayout/User/User";
import Login from "./pages/MainLayout/Login/Login";
import Register from "./pages/MainLayout/Register/Register";
import HowToUse from "./pages/MainLayout/HowToUse/HowToUse";
import Menu from "./pages/MainLayout/Menu/Menu";
import MealDetail from "./pages/MealDetail/MealDetail";
import Pricing from "./pages/MainLayout/Pricing/Pricing";
import Question from "./pages/MainLayout/Question/Question";
import { Toaster } from "react-hot-toast";
import AccountDetail from "./pages/MainLayout/SettingLayout/SettingLayout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />}></Route>

              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="pricing" element={<Pricing />}></Route>
              <Route path="how-to-use" element={<HowToUse />}></Route>
              <Route path="menu" element={<Menu />}></Route>
              <Route path="meal-detail/:id" element={<MealDetail />}></Route>
              <Route element={<ProtectedRoutes />}>
                <Route path="question" element={<Question />}></Route>
                <Route
                  path="account-detail"
                  element={<AccountDetail />}
                ></Route>
              </Route>
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />}></Route>
                <Route path="user" element={<User />}></Route>
              </Route>
            </Route>
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
