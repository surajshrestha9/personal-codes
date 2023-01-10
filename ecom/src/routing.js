import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pages } from "./pages";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.HomePage />} />
          <Route path="/register" element={<Pages.RegisterPage />} />
          <Route path="/login" element={<Pages.LoginPage />} />
          <Route path="*" element={<Pages.ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
