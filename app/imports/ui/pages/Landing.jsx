import React from 'react';
import {Image} from 'semantic-ui-react';
import NavBar from '../components/NavBar';
import Signin from '../pages/Signin';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div>
      <Image id="main" src="/images/main.jpg"/>
      <NavBar/>
      </div>

      );
  }
}

export default Landing;
