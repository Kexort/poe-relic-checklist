import React from 'react';

import Link from './LinkTypes/link';
import "../styles.css";

import githubBadge from 'githubBadge';

const githubLinks = props => (
  <div className="links">
    <Link linkTo="https://github.com/5k-mirrors/relic-checklist/issues/new">Report issue</Link>
    <Link linkTo="https://github.com/5k-mirrors/relic-checklist">
      <img src={githubBadge} alt="GitHub" />
    </Link>
    <Link linkTo="https://github.com/5k-mirrors" text="5k-mirrors">5k-mirrors</Link>
  </div>
);

export default githubLinks;