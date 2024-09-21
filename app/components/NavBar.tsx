import { Link, Navbar, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { dmSerifText } from "../shared/fonts";

interface NavBarProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export function NavBar(props: NavBarProps) {
    const menuItems = [
        "Assets",
        "History",
        "Settings",
      ];

    return (<Navbar onMenuOpenChange={props.setIsMenuOpen} className={props.isMenuOpen ? 'bg-lightGreen' : 'bg-darkGreen'}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={props.isMenuOpen ? "Close menu" : "Open menu"}
        className={`sm:hidden ${props.isMenuOpen ? 'text-darkGreen' : 'text-white'}`}
      />
      {/* <NavbarBrand>
        <p className="font-bold text-inherit">MiniSafe</p>
      </NavbarBrand> */}
    </NavbarContent>

    <NavbarMenu className='bg-lightGreen'>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={"foreground"}
            className={`w-full text-2xl mb-8 text-darkGreen ${dmSerifText.className}`}
            href="#"
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>);
}