import { AddProducts, BrandName, Footer, FooterContent, Header, Hero, MergProducts, NewArrival, OverHappyCustomers, Skeleton, TopSellingProducts, useSelector } from "../utils/imports"
const Home = () => {

  const data = useSelector(state => state?.product?.allProducts?.products)
  return (
    <div>
      <AddProducts />
      {data?.length > 0 ?
        <>
          <Header />
          <Hero />
          <BrandName />
          <NewArrival />
          <TopSellingProducts />
          <MergProducts />
          <OverHappyCustomers />
          <FooterContent />
          <Footer />
        </> : 
        <Skeleton />
      }
    </div>
  )
}

export default Home
