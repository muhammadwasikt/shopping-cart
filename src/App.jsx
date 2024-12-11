import { Route, routes, Routes} from "./utils/imports"


const App = () => {
  return (
    <div>
      <Routes>
        {
          routes.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            )
          })
        }
      </Routes>
    </div>
  )
}

export default App
