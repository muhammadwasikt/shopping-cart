import {Footer, Header, Outlet} from "../utils/imports"


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
