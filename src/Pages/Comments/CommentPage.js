import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentPage extends Component {
  render() {
    return (
      <div>
        <p>work damn you</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(CommentPage);
