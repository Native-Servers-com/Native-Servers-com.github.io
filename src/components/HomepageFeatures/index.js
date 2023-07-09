import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Gebaut mit Docusaurus.',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Wir nutzen für unser Wiki die Software Docusaurus. Diese vereint mit der Community sorgt für ein übersichtliches und flexibles Wiki.
      </>
    ),
  },
  {
    title: 'Helfen & Geld verdienen.',
    Svg: require('@site/static/img/money.svg').default,
    description: (
      <>
        Hilf' uns, das Wiki mit Leben zu füllen und verdiene dazu noch Coins für Deine nächste Server-Verlängerung. <Link to="/how-to-contribute"> Wie kann ich Inhalte verfassen?</Link>
      </>
    ),
  },
  {
    title: 'Eine Sprache. Markdown.',
    Svg: require('@site/static/img/markdown.svg').default,
    description: (
      <>
        Alle Tutorials werden mit Markdown geschrieben. Eine Auszeichnungssprache, die im gesamten Internet verwendet wird.
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
