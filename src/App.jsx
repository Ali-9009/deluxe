import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './Components/AboutUs'
import Processing from './Components/Processing'
import ContactUs from './Components/ContactUs'
import Equipment from './Components/Equipment'
import Blog from './Components/Blog'
import BlogsDetail from './Components/BlogsDetail'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
    },
    {
      path: '/about',
      element:
        <>
          <Navbar />
          <AboutUs />
          <Footer />
        </>
    },
    {
      path: '/processing',
      element:
        <>
          <Navbar />
          <Processing />
          <Footer />
        </>
    },
    {
      path: '/Contact',
      element:
        <>
          <Navbar />
          <ContactUs />
          <Footer />
        </>
    },
    {
      path: '/Equipment',
      element:
        <>
          <Navbar />
          <Equipment />
          <Footer />
        </>
    },
    {
      path: '/blog',
      element:
        <>
          <Navbar />
          <Blog />
          <Footer />
        </>
    },
    {
      path: '/blog-detail',
      element:
        <>
          <Navbar />
          <BlogsDetail />
          <Footer />
        </>
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
