import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import PostIndex from '../components/PostIndex.js';
import { Config } from '../config';

// eslint-disable-next-line react/prefer-stateless-function
export default class PostIndexPage extends Component {
  render() {
    return (
      <Layout index={false}>
        <h1>Post Index</h1>
        <ul>
          <PostIndex limit={20} />
        </ul>
      </Layout>
    );
  }
}
