import React  from 'react';

export class SpotifyButton extends React.Component {

render() {
  return (
    <div>
    <div className="button-container">
      <button style={{color:"white"}}  className="button button--primary">
      <i class="fab fa-spotify"></i></button>
    </div>
  </div>);
  }
}