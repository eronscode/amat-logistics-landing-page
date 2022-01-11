import React from "react";
import styles from "./styles.module.scss";
import { MailIcon } from "components/Svg";
import Button from "components/UI/Button";
import useFormSubscription from "lib/hooks/useFormSubscription";

function SubscribeCTA() {
  const { isLoading, onValueChange, value, handleSubmit } =
    useFormSubscription();

  return (
    <section id="subscribe" className="mt-32">
      <div className="container">
        <div className={styles.wrapper}>
          <div className="tablet:flex w-full">
            <div className="tablet:w-6/12 flex justify-center">
              <MailIcon />
            </div>
            <div className="tablet:w-6/12 ">
              <div className="mt-16 tablet:mt-0">
                <h5 className="text-white tablet:text-xl text-base mb-8 font-bold">
                  Test AmatNow,
                  <br /> Win Amazing Prices
                </h5>
                <div className={`${styles.subscribeSection} flex flex-wrap`}>
                  <div className="xl:w-8/12 py-2">
                    <div className="">
                      <input
                        value={value}
                        onChange={onValueChange}
                        type="email"
                        className="mr-6 w-full"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="xl:w-4/12  py-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeCTA;
