import React from "react";
import Navlink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link } from "react-scroll";
import styles from "./styles.module.scss";
import Backdrop from "components/UI/Backdrop";
import { CloseIcon } from "components/Svg";
import logo from "assets/images/pyo-logo.svg";
import { LinkItem } from "components/Header";
import Button from "components/UI/Button";

type Props = {
  toggleVisibility: () => void;
  visibility: boolean;
  links: {
    title: string;
    href: string;
  }[];
};

function MobileMenu(props: Props) {
  const { visibility, toggleVisibility, links } = props;
  const router = useRouter();

  const mobileClass = visibility ? "open" : "close";

  return (
    <>
      <div className="lg:hidden">
        <Backdrop show={visibility} toggleVisibility={toggleVisibility} />
        <div className={`mobi-menu ${mobileClass}`}>
          <div className="flex items-center">
            <div className="mobi-menu__logo w-3/4">
              <Navlink href="/">
                <div className="w-64 mr-12">
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
            <div onClick={toggleVisibility} className="flex justify-end w-3/12">
              <CloseIcon />
            </div>
          </div>

          <nav className="mt-12">
            <ul className={styles.mobileMenu}>
              {links.map((link, index) => {
                const isActive = router.pathname === link.href;
                return (
                  <React.Fragment key={index}>
                    <LinkItem
                      onClick={toggleVisibility}
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
                  <Button
                    onClick={toggleVisibility}
                    variant="primary"
                    style={{ padding: "13px" }}
                  >
                    Become Beta Tester
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
