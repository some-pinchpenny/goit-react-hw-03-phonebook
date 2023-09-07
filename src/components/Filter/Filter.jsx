import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChangeName }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={value}
        onChange={evt => {
          onChangeName(evt.target.value);
        }}
        type="text"
      />
    </FilterLabel>
  );
};
