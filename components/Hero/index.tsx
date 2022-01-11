import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "components/UI/Button";
import { WarningIcon } from "components/Svg";
import useFormSubscription from "lib/hooks/useFormSubscription";

function HomeHero() {
  const {
    isLoading,
    onValueChange,
    value,
    handleSubmit,
    usersCount,
    getSubscribersCount,
  } = useFormSubscription();

  useEffect(() => {
    getSubscribersCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section id="home" className={styles.wrapper}>
        <div className="container">
          <div className="tablet:flex">
            <div className="tablet:w-6/12 tablet:px-6 tablet:order-last">
              <div className="w-full h-full relative">
                <Image
                  src="/images/hero-img-1-min.png"
                  alt="hero image"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  priority
                />
              </div>
            </div>
            <div className="tablet:w-6/12 tablet:px-6">
              <div className={styles.textCaption}>
                <h1 className="font-ibm-plex">
                  Order in <span style={{ color: "#E93821" }}>3-clicks</span>.
                  Delivered At Your{" "}
                  <span style={{ color: "#E93821" }}>Doorstep</span>.
                </h1>
                <div className={styles.heroText}>
                  <p>Become a Beta Tester</p>
                  <p>
                    Join us in testing AmatNow and win amazing prices on bugs
                    found!
                  </p>
                </div>
                <div className="flex flex-wrap">
                  <div className={`${styles.inputWrapper} xl:w-8/12 py-2`}>
                    <div className="mr-7">
                      <input
                        type="email"
                        value={value}
                        onChange={onValueChange}
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
                <div className={styles.subscriptionCount}>
                  {!usersCount ? (
                    <p>loading...</p>
                  ) : (
                    <p className="flex">
                      <span className="mr-4">
                        <WarningIcon />
                      </span>
                      <span className="font-bold">{50 - usersCount}</span>
                      /50 slots left
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeHero;
