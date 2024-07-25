import logo from './logo.svg';
import './App.css';
import About from "./screens/About";
import Contact from "./screens/Contact";
import Register from "./screens/Register";
import UserList from './screens/UserList';
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer)

const router = createBrowserRouter([
  {
    path:"/",
    element: <h1>this is home page</h1>
  },
  {
    path:"/about",
    element: <h1>this is about us page</h1>
  },
  {
    path:"/register",
    element: <Register />
  },
  {
    path:"/user-list",
    element: <UserList/>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
