import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Resource Graph',
    image: 'img/illustrations/sheep-professor.svg',
    description: (
      <>
        Resoto indexes resources, captures dependencies, and maps out your cloud
        infrastructure in an intuitive{' '}
        <strong>
          <Link to="/docs/concepts/graph">graph</Link>
        </strong>
        .
      </>
    ),
  },
  {
    title: 'Search and Automation',
    image: 'img/illustrations/sheep-airport.svg',
    description: (
      <>
        Developers and SREs can{' '}
        <strong>
          <Link to="/docs/concepts/search">search</Link>
        </strong>{' '}
        the graph and create alerting and cleanup{' '}
        <strong>
          <Link to="/docs/concepts/automation/workflow">workflows</Link>
        </strong>
        .
      </>
    ),
  },
  {
    title: 'Metrics',
    image: 'img/illustrations/sheep-strong.svg',
    description: (
      <>
        Data can be aggregated and exported to a{' '}
        <strong>time-series database</strong> such as{' '}
        <a
          href="https://prometheus.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prometheus
        </a>
        !
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
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
