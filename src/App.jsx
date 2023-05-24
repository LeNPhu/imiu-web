import { BrowserRouter, Routes, Route } from "react-router-dom";
import { adminRouters, publicRouters } from "./config/Routes";
import ProtectedRoutes from "./config/ProtectedRoutes";
import PrivateRoutes from "./config/PrivateRoutes";
import MainLayout from "./pages/MainLayout/MainLayout";
import AdminLayout from "./pages/AdminLayout/AdminLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {/* <Route element={<ProtectedRoutes />}> */}
            <Route path="/" element={<MainLayout />}>
              {publicRouters.map(({ path, element }, index) => {
                return (
                  <Route key={index} path={path} element={element}></Route>
                );
              })}
            </Route>
            {/* </Route> */}
            {/* <Route element={<PrivateRoutes />}> */}
            <Route path="/" element={<AdminLayout />}>
              {adminRouters.map(({ path, element }, index) => {
                return (
                  <Route key={index} path={path} element={element}></Route>
                );
              })}
            </Route>
            {/* </Route> */}
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </>
  );
};

export default App;
