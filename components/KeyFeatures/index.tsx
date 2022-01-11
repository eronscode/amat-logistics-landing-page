import React from "react";
import styles from "./styles.module.scss";
import { ArrowRight, ArticleIcon, ForumIcon, PlayIcon } from "components/Svg";
import { Link } from "react-scroll";

export default function KeyFeatures() {
  return (
    <section id="features" className="mt-40">
      <div className="container">
        <h2 className="text-center tablet:text-2xl text-base font-extrabold">
          Discover Key Features
        </h2>
        <div className="tablet:flex mt-12">
          <div className="tablet:w-4/12 w-full tablet:px-8">
            <div className={styles.feature}>
              <ArticleIcon />
              <h5>Share News</h5>
              <p>
                Stay updated with localized reports of recent happening around
                you. Stay informed!
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
              <PlayIcon />
              <h5>Go Live</h5>
              <p>
                In an endangering situation? Share your live location with
                viewers and security personnels.
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
              <ForumIcon />
              <h5>Join Forums</h5>
              <p>
                Join a forum of like minded individuals. Interact and share
                mutually exclusive ideas.
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
