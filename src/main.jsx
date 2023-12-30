import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import ContactUs from './components/contactus/ContactUs.jsx'
import User from './components/user/User.jsx'
import Github, { githubLoader } from './components/github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:
//     [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contactus",
//         element:<ContactUs/>
//       },
      
//     ]
//   }

// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>} >

    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contactus' element={<ContactUs/>} />
    <Route path='github' loader={githubLoader} element={<Github/>} />
    <Route path='user/:userid' element={<User/>} />
    
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
