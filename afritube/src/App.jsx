import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Security from "./pages/Security";
import MainLayout from "./pages/MainLayout";
import Watch from "./components/Watch";
import Favourites from "./pages/Favourites";
import PlayLayout from './pages/PlayLayout'
import WatchLayout from "./pages/WatchLayout";
import { FavouritesReducer } from "./store/reducer";
import VideosPlayPage from "./pages/VideosPlayPage";
import AudiBooks from "./components/AudiBooks";
import AudioFavourites from "./pages/AudioFavourites";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <HomePage /> },
        { path: "/security", element: <Security /> },
        {
          path: "content",
          element: <MainLayout />,
          children: [
            {
              element: <WatchLayout />,
              children: [
                {
                  index: true,
                  element: <Watch />,
                },
                {
                  path: "favourites",
                  element: <Favourites />,
                },
              ],
            },
            { path: "/content/:videoId", element: <VideosPlayPage /> },
            { path: "music", element: <PlayLayout />,
              children: [
                {index:true, element: <AudiBooks />  },
                {path: 'favourites', element: <AudioFavourites />}
              ]
          },
          ],
        },
      ],
    },
  ]);

  return (
    <FavouritesReducer>
      <RouterProvider router={routes} />
    </FavouritesReducer>
  );
}

export default App;
