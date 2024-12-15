import { Drawer, Link } from "../../utils/imports";

const NavLinks = () => (
    <ul className="flex justify-evenly gap-5 text-text-color cursor-pointer max-lg:hidden w-full">
        <Link to='/home'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/sale'>Sale</Link>
        <Drawer category />
    </ul>
);

export default NavLinks;