import { Contact, ContactText, DeleteBtn } from './ContactsItem.styled';

export const ContactsItem = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <Contact key={id}>
      <ContactText>{name}</ContactText>
      <ContactText>{number}</ContactText>
      <DeleteBtn onClick={() => onDelete(id)} type="button">
        Delete
      </DeleteBtn>
    </Contact>
  );
};
