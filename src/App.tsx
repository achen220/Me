
import { createBrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements} from "react-router-dom";

const router: any = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="books" element={books}/>
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
