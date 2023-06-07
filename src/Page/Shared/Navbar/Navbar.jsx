import Logo from "./Logo";

import MenuDropdown from "./MenuDropdown";
import Containers from "./Containers";
import Items from "./Items";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Containers>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Items />
            <MenuDropdown />
          </div>
        </Containers>
      </div>
    </div>
  );
};

export default Navbar;
