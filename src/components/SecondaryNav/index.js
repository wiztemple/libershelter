import React from 'react';

// style
import './SecondaryNavStyle.css';

const SecondaryNav = () => {
  return (
    <div className="secondarynav">
      <div className="container-fluid">
        <div className="secondarynav-left">
          <div className="secondarynav-child">
            <span>Genre</span>
            <div className="filter-flex">
              <div className="filter-pill">Fiction</div>
              <span className="filter-flex__arrow">
                <svg width="23" height="8" viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.3534 4.36544C22.5487 4.17028 22.5489 3.8537 22.3537 3.65833L19.1735 0.47458C18.9784 0.279209 18.6618 0.279033 18.4664 0.474186C18.2711 0.66934 18.2709 0.985922 18.466 1.18129L21.2929 4.01129L18.4629 6.83815C18.2675 7.0333 18.2673 7.34988 18.4625 7.54525C18.6577 7.74062 18.9742 7.7408 19.1696 7.54565L22.3534 4.36544ZM0.999722 4.5L21.9997 4.51169L22.0003 3.51169L1.00028 3.5L0.999722 4.5Z" fill="black" fill-opacity="0.44" />
                </svg>
              </span>
              <span className="filter-result__text">Showing 18 Result(s)</span>
            </div>
          </div>
        </div>
        <div className="secondarynav-right">
          <button className="filter-button">Filter</button>
          <button className="sort-button">Icon</button>
        </div>
      </div>
    </div>
  )
}

export default SecondaryNav;
