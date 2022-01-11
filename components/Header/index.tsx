import React, { ReactElement, useState } from "react";
import Navlink from "next/link";
import { Link } from "react-scroll";
import Image from "next/image";
import logo from "assets/images/pyo-logo.svg";
import styles from "./styles.module.scss";
import { MenuIcon } from "components/Svg";
import Button from "components/UI/Button";
import { useRouter } from "next/dist/client/router";
import MobileMenu from "components/MobileMenu";

const NavLinks = [
  {
    title: " Home",
    href: "home",
  },
  {
    title: "Features",
    href: "features",
  },
  {
    title: "Sneak Peek",
    href: "sneakpeek",
  },
];

function Header(): ReactElement {
  const [menuSidebarOpen, setMenuSidebarOpen] = useState(false);
  const router = useRouter();

  function toggleSideMenu() {
    setMenuSidebarOpen((prevState) => !prevState);
  }

  return (
    <>
      <MobileMenu
        links={NavLinks}
        visibility={menuSidebarOpen}
        toggleVisibility={toggleSideMenu}
      />
      <header className={`${styles.wrapper} w-full`}>
        <section className="flex px-4  xl:px-16 md:py-7">
          <div className="w-1/2 px-2  lg:w-2/5 xl:w-1/2 flex items-center">
            <Navlink href="/" passHref>
              <div className="w-48 mr-12">
                <Image
                  className=""
                  src={"/images/amat-logo.png"}
                  alt="logo"
                  height="100px"
                  width="200px"
                />
              </div>
            </Navlink>
          </div>

          <div className=" w-1/2 lg:w-3/5 xl:w-1/2 pl-12  flex items-center ">
            <ul
              className={`${styles.linkWrapper} m-0 items-center lg:flex hidden w-full justify-end`}
            >
              {NavLinks.map((link, index) => {
                const isActive = router.pathname === link.href;
                return (
                  <React.Fragment key={index}>
                    <LinkItem
                      isActive={isActive}
                      title={link.title}
                      href={link.href}
                    />
                  </React.Fragment>
                );
              })}
              <li className="">
                <Link
                  to={"subscribe"}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button variant="primary">Become Beta Tester</Button>
                </Link>
              </li>
            </ul>
            <span className="text-grey flex justify-end w-full lg:hidden">
              <button onClick={toggleSideMenu}>
                <MenuIcon />
              </button>
            </span>
          </div>
        </section>
      </header>
    </>
  );
}

export function LinkItem({
  title,
  href,
  isActive,
  onClick,
}: {
  title: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}): ReactElement {
  return (
    <li className="text-sm text-grey xl:pr-16 pr-9">
      <Link
        activeClass={styles.isActive}
        to={href}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <span
          onClick={onClick}
          className={`${isActive && styles.isActive} pb-2 hover:text-primary`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
}

export default Header;
