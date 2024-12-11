import { PageNotFoundImg } from "../../utils/imagesimport"



const PageNotFound = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-50">
      <img src={PageNotFoundImg} className="w-full h-[100vh] object-contain" />
    </div>
  )
}

export default PageNotFound
