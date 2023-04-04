import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Input,
  Label,
  Searchbar as SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  Icon,
} from './Searchbar.styles';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      return toast.error('Cannot read ');
    }
    this.props.onSubmit(this.state.inputValue);
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <Label>Search</Label>
            <Icon size="24px" />
          </SearchFormButton>
          <Input
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          ></Input>
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}

export default Searchbar;
