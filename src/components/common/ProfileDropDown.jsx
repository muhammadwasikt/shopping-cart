import { CgProfile, UserLertModal } from "../../utils/imports";

const ProfileDropdown = () => {

    const handleLogOut = ()=>{
        document.getElementById('user_alert_modal').showModal()
    }
    return(
    <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
            <div className="tooltip tooltip-bottom text-textColor" data-tip="Profile">
                <div className="btn">
                    <CgProfile className="text-3xl text-textColor" />
                </div>
            </div>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow leading-6 cursor-pointer">
            <li className="hover:bg-gray-200 px-4"> Profile </li>
            <li className="hover:bg-gray-200 px-4"> Settings</li>
            <li className="hover:bg-gray-200 px-4" onClick={handleLogOut}> Logout</li>
        </ul>
        <UserLertModal />
    </div>
)
};

export default ProfileDropdown