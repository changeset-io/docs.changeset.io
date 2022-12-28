import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Intuitive Workflow Builder",
    Svg: require("@site/static/img/ui.svg").default,
    description: (
      <>
        Learn to use the workflow builder to create pull request automations
        that keep your team moving quickly.
      </>
    ),
  },
  {
    title: "Automation Rules",
    Svg: require("@site/static/img/computer.svg").default,
    description: (
      <>
        Learn how to automate repeatable pull request tasks and allow your team
        to focus on shipping product.
      </>
    ),
  },
  {
    title: "Codified Culture",
    Svg: require("@site/static/img/blocks.svg").default,
    description: (
      <>
        Learn how to keep teams aligned on best practices by creating workflows
        that check code for repeatable call outs.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
