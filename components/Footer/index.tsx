import React from "react";
import styles from "./styles.module.scss";
import Button from "components/UI/Button";
import useFormSubscription from "lib/hooks/useFormSubscription";
import { Link } from "react-scroll";

function Footer() {
  const { isLoading, onValueChange, value, handleSubmit } =
    useFormSubscription();
  return (
    <section className="bg-dark pt-7 pb-10 tablet:mt-0 mt-32">
      <div style={{ color: "#D9DBE1" }} className="container">
        <div className="md:flex items-end">
          <div className="md:w-1/3 md:py-8 py-12 px-1 ">
            <ul className="flex m-0 p-0 justify-center">
              <li className="mr-12 text-xxs cursor-pointer">
                <Link
                  to={"home"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="mr-12 text-xxs cursor-pointer">
                <Link
                  to={"features"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Features
                </Link>
              </li>
              <li className="cursor-pointer text-xxs">
                <Link
                  to={"sneakpeek"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Sneak Peek
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-2/6 md:py-0 py-12 order-last">
            <div className={styles.footerSubscription}>
              <h4 className="mb-6"> Become Beta Tester</h4>
              <div className="flex flex-wrap">
                <div className="sm:w-9/12">
                  <div className="mr-7">
                    <input
                      value={value}
                      onChange={onValueChange}
                      type="email"
                      className="mr-6"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                <div className="sm:w-3/12">
                  <Button
                    disabled={isLoading}
                    isLoading={isLoading}
                    onClick={handleSubmit}
                    variant="primary"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/6   md:py-8 py-12 px-11">
            <p className="text-center text-xxs">
              © {new Date().getFullYear()} AmatNow. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
