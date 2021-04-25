import React from 'react';

import HeaderTop from './HeaderTop';
import MainNav from './MainNav';

function Layout (props) {
  return (
    <React.Fragment>
      <HeaderTop />
      <MainNav />
      {props.children}
    </React.Fragment>
  )
}

export default Layout;