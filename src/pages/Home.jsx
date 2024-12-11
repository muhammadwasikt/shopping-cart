import { AddProducts, BrandName, Footer, FooterContent, Header, Hero, MergProducts, NewArrival, OverHappyCustomers, TopSellingProducts} from "../utils/imports"
const Home = () => {
  
  return (
    <div>
     <AddProducts />
     <Header />
     <Hero /> 
     <BrandName />
     <NewArrival />
     <TopSellingProducts />
     <MergProducts />
     <OverHappyCustomers />
     <FooterContent />
     <Footer />
    </div>
  )
}

export default Home
