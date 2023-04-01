import { Component } from 'react';

import { App as Wrapper } from './App.styles';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {};
  handleSubmit = () => {
    console.log('hey');
  };
  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
      </Wrapper>
    );
  }
}
