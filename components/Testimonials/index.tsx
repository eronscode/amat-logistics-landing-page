import React, { useCallback, useRef, useState } from "react";
import { QuoteIcon, RoundTwitterIcon } from "components/Svg";
import styles from "./styles.module.scss";

function TestimonialSection() {
  return (
    <section className="mt-48 tablet:mt-56 relative">
      <div className="container">
        <div className="flex">
          <div className={styles.quoteIcon}>
            <QuoteIcon />
          </div>
          <div>
            <h4 className="tablet:text-2xl text-lg font-bold text">
              Expectations <br className="hidden tablet:block" /> Are High
            </h4>
            <p className="text-sm">People can’t wait to see what we’ve got!</p>
          </div>
        </div>
        <div className="tablet:flex mt-12">
          <div className="tablet:w-4/12 w-full tablet:px-8">
            <div className={styles.quotes}>
              <div className="flex">
                <div className="mr-6">
                  <QuoteIcon style={{ height: "15px", width: "15px" }} />
                </div>
                <div>
                  <h6 className="tablet:text-sm text-xs">
                    To just be able to order for African meal and items from my
                    house is the best feeling
                    <span className={styles.tag}>#amatnow #app</span>
                  </h6>
                  <p className="flex mt-10 items-center">
                    <span className="mr-4">
                      <RoundTwitterIcon />
                    </span>
                    <span className="text-xxs" style={{ color: "#969BAB" }}>
                      @gloryokings
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tablet:w-4/12 w-full tablet:px-8">
            <div className={styles.quotes}>
              <div className="flex">
                <div className="mr-6">
                  <QuoteIcon style={{ height: "15px", width: "15px" }} />
                </div>
                <div>
                  <h6 className="tablet:text-sm text-xs">
                    Ordering African food from the comfort of my couch, wow
                    never saw this coming.
                    <span className={styles.tag}>#Amatnow #App #Thelunch</span>
                  </h6>
                  <p className="flex mt-10 items-center">
                    <span className="mr-4">
                      <RoundTwitterIcon />
                    </span>
                    <span className="text-xxs" style={{ color: "#969BAB" }}>
                      @tallnutella
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tablet:w-4/12 w-full tablet:px-8">
            <div className={styles.quotes}>
              <div className="flex">
                <div className="mr-6">
                  <QuoteIcon style={{ height: "15px", width: "15px" }} />
                </div>
                <div>
                  <h6 className="tablet:text-sm text-xs">
                    Finally I can say goodbye to the stress of shopping for
                    African food items. With AmatNow my phone is my new market
                    💯💯
                    <span className={styles.tag}>
                      {" "}
                      #AmatNow #Istanbul #Africanmarket #Africanapp
                      #onlineshopping #homedelivery
                    </span>
                  </h6>
                  <p className="flex mt-10 items-center">
                    <span className="mr-4">
                      <RoundTwitterIcon />
                    </span>
                    <span className="text-xxs" style={{ color: "#969BAB" }}>
                      @joshdemy
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
