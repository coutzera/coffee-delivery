import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CompletedOrder } from "./pages/CompletedOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completedOrder" element={<CompletedOrder />} />
      </Route>
    </Routes>
  );
}
