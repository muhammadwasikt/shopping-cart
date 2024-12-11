import { setAddToCart, useDispatch, useSelector } from "../../utils/imports";

const Card = ({ item, badge }) => {
    
    
    const dispatch = useDispatch()
    const {id, title, price, image, description, rating, greate, name , discount } = item;
    return (
        <div className="card bg-base-100 w-full shadow-xl hover:scale-105 hover:shadow-2xl cursor-pointer">
            {image ? <div onClick={()=>dispatch(setAddToCart(item))}>
                <figure>
                    <img src={image} className="object-contain h-[150px]" />
                </figure>
                <div className="card-body px-5">
                    <h2 className="card-title">
                        {title?.slice(0, 10)}
                        {discount && <div className="badge badge-secondary"> {discount} %off</div>}
                    </h2>
                    <p className="text-left h-20">{description?.slice(0, 50)}...</p>
                    <p className="text-left font-bold">${price}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline w-full hover:bg-secondary cursor-pointer">Add To Cart</div>
                    </div>
                </div>
               
            </div> :
                <div className="card bg-base-100 w-full shadow-xl">
                    <div className="card-body h-[200px] text-left px-4">
                        <h2>{rating}</h2>
                        <h2 className="card-title">{name}
                            <div className="badge ml-[-5px]">{greate}</div>
                        </h2>
                        <p>{description}</p>
                    </div>
                </div>}
        </div>
    )
}

export default Card
