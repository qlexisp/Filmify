import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from './404NotFound.jsx';
import Search from './Search.jsx';
import { createBrowserRouter, RouterProvider, json } from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
},
{
  path: '/search/:query',
  loader: async ({ params }) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${params.query}&api_key=e0fa0c69b5ec0c1fd6153567c8a33701`
    );
    return await data.json();
  },
  element: <Search />,
  errorElement: <NotFound />
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
