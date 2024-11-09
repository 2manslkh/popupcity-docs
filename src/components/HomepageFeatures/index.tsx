import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Comprehensive Planning",
    description: (
      <>
        Learn how to plan every aspect of your pop-up city, from location
        selection to infrastructure and community building.
      </>
    ),
  },
  {
    title: "Digital Integration",
    description: (
      <>
        Implement modern digital governance systems, including DAOs, digital
        identities, and dual-currency systems.
      </>
    ),
  },
  {
    title: "Community Focused",
    description: (
      <>
        Build thriving temporary communities with detailed guides on engagement,
        events, and cultural integration.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
