
import { NavigationBar } from "./dashboard/components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard";

export function App() {

  return (
    <BrowserRouter>
      <div className="flex">
        <NavigationBar />
        <div className="w-full p-12">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pedidos" element={<div>pedidos</div>} />
            <Route path="/produtos" element={<div>produtos</div>} />
            <Route path="/financeiro" element={<div>financeiro</div>} />
            <Route path="/clientes" element={<div>clientes</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
