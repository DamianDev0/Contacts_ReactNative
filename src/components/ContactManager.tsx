import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import useContactManager from '../hooks/useContactManager';
import {Contact} from '../interfaces/Contact.interface';
import DeleteModal from './contactManager/DeleteModal';
import Header from './contactManager/HeaderContactManager';
import ContactForm from './contactManager/InputsContactManager';
import ButtonSection from './contactManager/ButtonSection';

interface ContactManagerProps {
  contact: Contact | null;
  onAddContact: (contact: Contact) => void;
  onDeleteContact: (contact: Contact) => void;
  onClose: () => void;
}

const ContactManager: React.FC<ContactManagerProps> = ({
  contact,
  onAddContact,
  onDeleteContact,
  onClose,
}) => {
  const {
    name,
    phone,
    email,
    photo,
    role,
    deleteModalVisible,
    setName,
    setPhone,
    setEmail,
    selectImage,
    saveContact,
    openDeleteModal,
    closeDeleteModal,
    confirmDelete,
    setRole,
  } = useContactManager({contact, onAddContact, onDeleteContact});

  return (
    <ScrollView>
    <View style={styles.container}>
    <Header photo={photo} />


      <ContactForm
        name={name}
        phone={phone}
        email={email}
        role={role}
        photo={photo}
        setName={setName}
        setPhone={setPhone}
        setEmail={setEmail}
        setRole={setRole}
        selectImage={selectImage}
      />

      <ButtonSection
        contact={contact}
        saveContact={saveContact}
        onClose={onClose}
        openDeleteModal={openDeleteModal}
      />

      <DeleteModal
        visible={deleteModalVisible}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        contactName={contact?.name}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ContactManager;
