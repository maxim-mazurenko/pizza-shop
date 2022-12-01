import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#dedede"
    foregroundColor="#d1d1d1"
    {...props}>
    <rect x="0" y="263" rx="10" ry="10" width="280" height="30" />
    <circle cx="140" cy="130" r="120" />
    <rect x="34" y="325" rx="10" ry="10" width="210" height="70" />
    <rect x="0" y="430" rx="10" ry="10" width="127" height="30" />
    <rect x="155" y="418" rx="10" ry="10" width="120" height="44" />
  </ContentLoader>
);

export default Skeleton;
