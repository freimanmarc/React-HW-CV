import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (<ul>
    <li>
      <Link to = '/'>Home</Link>
    </li>
    <li>
    <Link to = '/Sleepy'>Sleepy</Link>
    </li>
    <li>
      <Link to = '/Happy'>Happy</Link>
      </li>
      <li>
    <Link to = '/Guilty'>Guilty</Link>
      </li>
    </ul>)
  }
}
