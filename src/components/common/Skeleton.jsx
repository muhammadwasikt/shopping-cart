
const Skeleton = () => {
  return (
    <div className="flex flex-col p-3 gap-2">
      <div className="skeleton h-[70px] w-full"></div>
      <div className="skeleton h-96 w-full"></div>
      <div className="skeleton h-16 w-full"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-3 w-full py-2 ">
        <div className="skeleton h-56 w-full"></div>
        <div className="skeleton h-56 w-full"></div>
        <div className="skeleton h-56 w-full"></div>
        <div className="skeleton h-56 w-full"></div>
      </div>
      <div className="skeleton h-16 w-full"></div>
    </div>
  )
}

export default Skeleton
