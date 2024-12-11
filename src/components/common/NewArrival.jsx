import {Card, useSelector, useState} from "../../utils/imports"




const NewArrival = () => {

    const [veiwAll, setVeiwAll] = useState(false)
    const data = useSelector(state => state?.product?.allProducts?.products)
    const handleVeiwAll = () => {
        setVeiwAll(!veiwAll)
    }


    
    return (
        <div className="py-10 text-center">
            <h1 className="text-3xl font-bold mb-7 tracking-tighte">NEW ARRIVALS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-3 w-full p-2 px-3 max-sm:px-8">
                {
                    data?.slice(0, 4).map((data) => <Card item={data} key={data.id} badge />)
                }
                {
                    veiwAll ? data?.slice(5, 20).map((data) => <Card item={data} key={data.id} badge />) : null
                }
            </div>
            <div className="text-center pt-6">
                <button className='py-1 px-3 border hover:bg-secondary rounded font-bold text-lg' onClick={handleVeiwAll}>View {!veiwAll ? 'All' : 'Less'}</button>
            </div>
        </div>
    )
}

export default NewArrival
