import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projets" element={<Projects />} />
          <Route path="experiences" element={<Experience />} />
          <Route path="a-propos" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
