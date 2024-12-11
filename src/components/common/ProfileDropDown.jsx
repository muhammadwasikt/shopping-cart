import { CgProfile } from "../../utils/imports";

const ProfileDropdown = () => (
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
        </ul>
    </div>
);

export default ProfileDropdown