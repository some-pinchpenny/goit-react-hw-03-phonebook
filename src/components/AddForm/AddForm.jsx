import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ContactsBtn,
  ErrorNotif,
  Input,
  Label,
  PhoneForm,
} from './AddForm.styled';

const NameValid = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const NumberValid =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const FormSchena = Yup.object().shape({
  name: Yup.string('Enter your name')
    .min(3, 'Too Short!')
    .matches(
      NameValid,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      NumberValid,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(12, 'Phone number must be at least 12 digits')
    .required('Phone number is required'),
});

export const AddForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={FormSchena}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <PhoneForm>
          <Label>
            <Input type="text" name="name" placeholder="Name" />
            <ErrorNotif name="name" component="span" />
          </Label>
          <Label>
            <Input type="tel" name="number" placeholder="Number" />
            <ErrorNotif name="number" component="span" />
          </Label>
          <ContactsBtn type="submit">Add contact</ContactsBtn>
        </PhoneForm>
      </Formik>
    </div>
  );
};
