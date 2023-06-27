import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{
  createBrowserRouter,
  RouterProvider
}from "react-router-dom"

import Home from './routes/Home'
import Moletom1 from './roupas_link/Moletom1.jsx'
import Moletom2 from './roupas_link/Moletom2.jsx'
import Moletom3 from './roupas_link/Moletom3.jsx'
import Moletom4 from './roupas_link/Moletom4.jsx'
import Moletom5 from './roupas_link/Moletom5.jsx'
import Sueter1 from './roupas_link/Sueter1.jsx'
import Sueter2 from './roupas_link/Sueter2.jsx'
import Sueter3 from './roupas_link/Sueter3.jsx'
import Sueter4 from './roupas_link/Sueter4.jsx'
import Sueter5 from './roupas_link/Sueter5.jsx'
import Tenis1 from './roupas_link/Tenis1.jsx'
import Tenis2 from './roupas_link/Tenis2.jsx'
import Tenis3 from './roupas_link/Tenis3.jsx'
import Tenis4 from './roupas_link/Tenis4.jsx'
import Tenis5 from './roupas_link/Tenis5.jsx'
import Sandalia1 from './roupas_link/Sandalia1.jsx'
import Sandalia2 from './roupas_link/Sandalia2.jsx'
import Sandalia3 from './roupas_link/Sandalia3.jsx'
import Sandalia4 from './roupas_link/Sandalia4.jsx'
import Sandalia5 from './roupas_link/Sandalia5.jsx'


const router = createBrowserRouter([
  {
path:"/",
element:<App/>,
children:[
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/moletom1",
    element:<Moletom1/>
  },
  {
    path:"/moletom2",
    element:<Moletom2/>
  },
  {
    path:"/moletom3",
    element:<Moletom3/>
  },
  {
    path:"/moletom4",
    element:<Moletom4/>
  },
  {
    path:"/moletom5",
    element:<Moletom5/>
  },
  {
    path:"/sueter1",
    element:<Sueter1/>
  },
  {
    path:"/sueter2",
    element:<Sueter2/>
  },
  {
    path:"/sueter3",
    element:<Sueter3/>
  },
  {
    path:"/sueter4",
    element:<Sueter4/>
  },
  {
    path:"/sueter5",
    element:<Sueter5/>
  },
  {
    path:"/tenis1",
    element:<Tenis1/>
  },
  {
    path:"/tenis2",
    element:<Tenis2/>
  },
  {
    path:"/tenis3",
    element:<Tenis3/>
  },
  {
    path:"/tenis4",
    element:<Tenis4/>
  },
  {
    path:"/tenis5",
    element:<Tenis5/>
  },
  {
    path:"/sandalia1",
    element:<Sandalia1/>
  },
  {
    path:"/sandalia2",
    element:<Sandalia2/>
  },
  {
    path:"/sandalia3",
    element:<Sandalia3/>
  },
  {
    path:"/sandalia4",
    element:<Sandalia4/>
  },
  {
    path:"/sandalia5",
    element:<Sandalia5/>
  },
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
