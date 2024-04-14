import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider ,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/GitHub/Github.jsx'
// import { githubInfoLoader } from './components/GitHub/Github.jsx'
// import { Route } from 'react-router-dom'




//how the parameters we take from url are first done here
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>  
      },
      {
        path:"contact",
        element:<Contact/>  
      },
      {
        path:"github",
        element:<Github/>  
      },
      {
        path:"user/:userid",                      //here we are taking the id from the url
                                              // React router allows parameterizing URLs to access dynamic values.
        element:<User/>                       //user componet will get access of this id 
      },
    ]
  }
])

//we can do this in another way also

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='github' element={<Github/>} loader:{githubInfoLoader}/>
                                                  //this is the way to call the api whenever this component is loaded
//       <Route path='user/:userid' element={<User/>}/>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
