import { Component } from 'react';
import { AddForm } from './AddForm/AddForm';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { ContactsTitle, Layout, Title } from './Layout';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+380-32-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+980-32-443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '180-32-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '380-32-227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.contacts);
    // console.log(this.state.contacts);
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const hasName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (hasName) return window.alert(`${name} is allready in contacts`);

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterByName = filtredName => {
    this.setState({
      filter: filtredName,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const visibleItems = this.getVisibleContacts();

    return (
      <Layout>
        <Title>Phonebook</Title>
        <AddForm onAdd={this.addContact} />
        {this.state.contacts.length !== 0 && (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter
              value={this.state.filter}
              onChangeName={this.filterByName}
            />
            <ContactsList
              contacts={visibleItems}
              onDelete={this.deleteContact}
            />
          </>
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
