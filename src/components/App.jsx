import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { App as Wrapper } from './App.styles';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';

import Searchbar from './Searchbar/Searchbar';
import fetchApi from './services/fetchApi';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    images: [],
    total: 0,
    showModal: false,
    imageModal: '',
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const response = await fetchApi(query, page);
      if (response.hits.length === 0) {
        return toast.error('No pictures');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
      }));
      this.setState({ total: response.totalHits });
    } catch (error) {
      toast.error('Sorry, something went wrong...Please, try again');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changeQuery = query => {
    this.setState({ query, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onOpenModal = imageModal => {
    this.setState({ showModal: true, imageModal });
  };

  onCloseModal = () => {
    this.setState({ showModal: false, imageModal: '' });
  };

  render() {
    const { isLoading, images, total, showModal, imageModal } = this.state;
    const totalPage = images.length / total;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.changeQuery} />
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery images={images} onClick={this.onOpenModal} />
        )}
        {totalPage < 1 && !isLoading && images.length !== 0 && (
          <Button onClick={this.onLoadMore} />
        )}
        {showModal && (
          <Modal onClose={this.onCloseModal} imageModal={imageModal} />
        )}
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </Wrapper>
    );
  }
}
