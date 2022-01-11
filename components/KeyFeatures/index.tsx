import React from "react";
import styles from "./styles.module.scss";
import { ArrowRight, FoodIcon, NoteIcon, RiderIcon } from "components/Svg";
import { Link } from "react-scroll";

export default function KeyFeatures() {
  return (
    <section id="features" className="mt-40">
      <div className="container">
        <h2 className="text-center tablet:text-2xl text-base font-extrabold">
          Key Features
        </h2>
        <div className="tablet:flex mt-12">
          <div className="tablet:w-4/12 w-full tablet:px-8">
            <div className={styles.feature}>
              <FoodIcon />
              <h5>Place Orders</h5>
              <p>
                Order local food items, groceries, beauty and other essentials
                directly from the App.
              </p>
              <Link
                to={"subscribe"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button>
                  Learn More
                  <span className="ml-4">
                    <ArrowRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="tablet:w-4/12 w-full tablet:px-8">
            <div className={styles.feature}>
              <RiderIcon />
              <h5>Send Packages</h5>
              <p>
                Quickly send packages to anyone within turkey at affordable
                rates. Our riders would pickup and deliver the item.
              </p>
              <Link
                to={"subscribe"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button>
                  Learn More
                  <span className="ml-4">
                    <ArrowRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="tablet:w-4/12 w-full tablet:px-8">
            <div className={styles.feature}>
              <NoteIcon />
              <h5>Request Anything</h5>
              <p>
                Request for literally anything and AmatNow would do the
                searching for you.
              </p>
              <Link
                to={"subscribe"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button>
                  Learn More
                  <span className="ml-4">
                    <ArrowRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
