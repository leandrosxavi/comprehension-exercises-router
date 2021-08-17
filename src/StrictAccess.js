import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { username, password } = this.props.user;
    
    return(
      <div>
        { username !== 'joao' || password !== '1234' ? (
          alert('Access Denied'),
          <Redirect to="/" />
         ) : <p>Welcome João!</p> }
      </div>
    )
  }
}

export default StrictAccess;