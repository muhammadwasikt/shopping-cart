import { removeUser, useDispatch } from "../../utils/imports"


const UserLertModal = () => {

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(removeUser([]))
    }
    return (
        <div>
            <dialog id="user_alert_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div role="alert" className="alert bg-white border-none flex flex-col">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info h-24 w-24 shrink-0">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-lg">Are you sure you want to logout</span>
                        <div className="w-28 flex justify-between">
                            <form method="dialog">
                                <button className="btn btn-sm">No</button>
                            </form>
                            <button className="btn btn-sm" onClick={handleLogout}>Yes</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default UserLertModal
