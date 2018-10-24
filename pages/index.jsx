import React, { Component } from 'react';

import StyledApp from './styled-components/styled-app';
import getItems from './services/Items/request';

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Have a fall back data object incase server request fails
    const defaultData = [
      {
        title: 'Hello world!',
        body: 'The world is a green and blue wonderful place.',
      },
      {
        title: 'Hello... Underworld!',
        body: 'Death and decay is all around you. You are likely dead yourself...',
      },
    ];
    // Fetch your list data and set state
    getItems()
      .then((response) => {
        console.log('Request succeeded: ', response);
        const data = response.data.Folder.documents;
        this.setState({ data });
      })
      .catch((error) => {
        console.log('Request failed: ', error);
        this.setState({ defaultData });
      });
  }

  // ES7 Method
  // async componentDidMount() {
  //   const defaultData = [
  //     {
  //       title: 'Hello world!',
  //       body: 'The world is a green and blue wonderful place.',
  //     },
  //     {
  //       title: 'Hello... Underworld!',
  //       body: 'Death and decay is all around you. You are likely dead yourself...',
  //     },
  //   ];
  //   try {
  //     const response = await getItems();
  //     const data = response.data.Folder.documents;
  //     this.setState({ data });
  //   } catch (error) {
  //     console.log('Request failed: ', error);
  //     this.setState({ defaultData });
  //   }
  // }

  render() {
    return (
      <div className="app">
        <StyledApp>
          {this.state.data.length
            ? this.state.data.map(post => (
              <div className="list__item">
                <span className="list__title">{post.title}</span>
                <br />
                <span className="list__body">{post.body}</span>
              </div>
            ))
            : (
              <div className="loading">
              Loading ...
              </div>
            )
        }
        </StyledApp>
      </div>
    );
  }
}
