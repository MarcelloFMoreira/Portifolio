import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import Projetos from './routes/Projetos.jsx';
import Sobre from './routes/Sobre.jsx';
import Detalhesprojeto from './routes/Detalhesprojeto.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "contatos",
        element: <Contact />,
      },
      {
        path: "projetos",
        element: <Projetos />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "detalhes_projeto",
        element: <Detalhesprojeto/>,
      },''
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);