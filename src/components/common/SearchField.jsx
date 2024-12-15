import { CiSearch, MdClose, useForm, useNavigate } from "../../utils/imports";


const SearchField = ({open , setOpen}) => {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const { searchValue } = data;
    if (searchValue.length > 1) {
      navigate(`/products/search/${searchValue}`)
    }
  }

  return (
    <>
    {open && <div className="absolute w-full z-10 px-2 flex items-center gap-2 rounded-md">
    <dialog className="p-3 w-full flex items-center gap-2 rounded-md bg-primary">
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-between bg-primary rounded-md w-[100%]">
        <div className="relative w-full">
          <input type="text" placeholder="Search products" className="outline-none px-3 w-full" {...register("searchValue", { required: true })} />
          {errors.searchValue && <span className="text-red-500 text-[10px] absolute left-0 top-8">This field is required</span>}
        </div>
        <input type="submit" id="submit" className="hidden" />
        <label htmlFor="submit" className="btn"><CiSearch className="text-xl flex-end" /></label>
      </form>
      <button onClick={()=>setOpen(false)} className="btn">
        <MdClose />
      </button>
    </dialog>
    </div>}
    </>
  )
}

export default SearchField
