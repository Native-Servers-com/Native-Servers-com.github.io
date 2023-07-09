import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Alles auf einen Blick.',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      In unserem Wiki findest Du zahlreiche Inhalte zu interessanten Themen, rund um unsere Produkte und Dienstleistungen.
      </>
    ),
  },
  {
    title: 'Helfen & Guthaben erhalten.',
    Svg: require('@site/static/img/money.svg').default,
    description: (
      <>
        Fülle unser Wiki mit hilfreichen Inhalten und erhalte Guthaben auf dein Kundenkonto!<br /> <Link to="/how-to-contribute"> Wie kann ich Inhalte verfassen?</Link>
      </>
    ),
  },
  {
    title: 'Eine Sprache. Markdown.',
    Svg: require('@site/static/img/markdown.svg').default,
    description: (
      <>
        Für die Erstellung unserer Wiki-Seiten kommt Markdown zum Einsatz. Eine Auszeichnungssprache, die im gesamten Internet verwendet wird.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
