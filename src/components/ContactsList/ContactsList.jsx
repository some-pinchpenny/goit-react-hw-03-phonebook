import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(item => (
        <li>
          <ContactsItem contact={item} onDelete={onDelete} />
        </li>
      ))}
    </List>
  );
};
