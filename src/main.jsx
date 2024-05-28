import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from './404NotFound.jsx';
import Search from './Search/Search.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DisplaySearchDetails from '../src/Search/DisplaySearchDetails.jsx';
import SearchResult from './Search/SearchResult.jsx';
import FullUpComingMovies from './Pages/FullUpComingMovies.jsx';
import FullTopRatedMovies from './Pages/FullTopRatedMovies.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/search',
    loader: async ({ params }) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${params.query}&api_key=e0fa0c69b5ec0c1fd6153567c8a33701`
      );
      return await data.json();
    },
    element: <Search />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/search/:query',
        loader: async ({ params }) => {
          const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${params.query}&api_key=e0fa0c69b5ec0c1fd6153567c8a33701`
          );
          return await data.json();
        },
        element: <SearchResult />,
        errorElement: <NotFound />
      }
    ]
  },
  {
    path: '/movie/:id',
    element: <DisplaySearchDetails />,
    errorElement: <NotFound />
  },
  {
  path: '/upcoming',
  element: <FullUpComingMovies />,
  errorElement: <NotFound />
},
{
  path: '/top-rated',
  element: <FullTopRatedMovies />,
  errorElement: <NotFound />
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
