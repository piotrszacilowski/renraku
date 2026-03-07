import { BrowserRouter, Routes, Route } from "react-router"
import Landing from "./pages/Landing"
import Marketplace from "./pages/Marketplace"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-mono bg-bg text-fg">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
