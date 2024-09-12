import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from '../src/Components/Home.jsx';
import About from '../src/Components/About/About.jsx';
import Courses from '../src/Components/Courses/Courses.jsx';
import Contact from '../src/Components/Contactus.jsx';
import Blog from '../src/Components/Blogs.jsx';

const router =createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path ='/' element={<Home/>}/>
    <Route path ='/about' element={<About/>}/>
    <Route path ='/courses' element={<Courses/>}/>
    <Route path ='/contact' element={<Contact/>}/>
    <Route path ='/blog' element={<Blog/>}/>
    {/* <Route path ='/admin-dashboard' element={<Admin/>}/> */}
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
