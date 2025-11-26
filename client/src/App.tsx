import { BrowserRouter, Route, Routes } from "react-router";
import PrivateRoutes from "./private-routes";
import AuthRoutes from "./modules/auth/routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<PrivateRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
