import {
  Input,
  Label,
  Searchbar as SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  Icon,
} from './Searchbar.styles';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrapper>
      <SearchForm>
        <SearchFormButton type="submit" onSubmit={onSubmit}>
          <Label>Search</Label>
          <Icon />
        </SearchFormButton>
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
        ></Input>
      </SearchForm>
    </SearchbarWrapper>
  );
};

export default Searchbar;
