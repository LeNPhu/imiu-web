import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import SettingLayout from "./pages/MainLayout/SettingLayout/SettingLayout";
import AccountDetail from "./pages/MainLayout/SettingLayout/AccountDetail/AccountDetail";
import Favourite from "./pages/MainLayout/SettingLayout/Favourite/Favourite";
import PaymentInfo from "./pages/MainLayout/SettingLayout/PaymentInfo/PaymentInfo";
import History from "./pages/MainLayout/SettingLayout/History/History";
import Profile from "./pages/MainLayout/SettingLayout/Profile/Profile";
import Security from "./pages/MainLayout/SettingLayout/Security/Security";
import Verify from "./pages/MainLayout/Verify/Verify";
import VerifiedRoutes from "./routes/VerifiedRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { Toaster } from "react-hot-toast";
import Payment from "./pages/MainLayout/Payment/Payment";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {/* Ai cung vo duoc */}
            <Route path="verify/:id/:expiration" element={<Verify />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="pricing" element={<Pricing />} />
              <Route path="how-to-use" element={<HowToUse />} />
              <Route path="menu" element={<Menu />} />
              <Route path="meal-detail/:id" element={<MealDetail />} />

              <Route element={<VerifiedRoutes />}>
                {/* Verified users only */}
                <Route path="payment" element={<Payment />} />
                <Route path="question" element={<Question />} />
                <Route path="setting" element={<SettingLayout />}>
                  <Route index element={<AccountDetail />} />
                  <Route path="favourite" element={<Favourite />} />
                  <Route path="payment-info" element={<PaymentInfo />} />
                  <Route path="history" element={<History />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="security" element={<Security />} />
                </Route>
              </Route>
            </Route>

            <Route element={<AdminRoutes />}>
              {/*Only admin*/}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="user" element={<User />} />
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
