import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout/DefaultLayout";
import { History } from "../pages/History/History";
import { Home } from "../pages/Home/Home";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
