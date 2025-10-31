import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Post from './pages/Post'

function App() {
 return (
  <BrowserRouter>
    <NavBar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:id" element={<Post />} />
    </Routes>
    <Footer />
  </BrowserRouter>

 )
}

export default App

// Utility: scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  // simple effect without hooks (React 19 supports use in components)
  // but we'll simulate via setTimeout to the next tick to avoid SSR issues
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, 0)
  return null
}
