import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../components/InputSearch';
import ContactManager from '../components/ContactManager';
import {useContacts} from '../hooks/UseContacts';
import ContactList from '../components/CardContact';

const ContactsScreen = () => {
  const {
    contacts,
    selectedContact,
    modalVisible,
    openModal,
    closeModal,
    addOrEditContact,
    deleteContact,
  } = useContacts();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Contactos</Text>
        <TouchableOpacity onPress={() => openModal()} style={styles.addButton}>
          <Text>
            <Icon name="plus" size={20} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>

      <SearchBar
        placeholder="Search a contact"
        onSearch={term => console.log('Término de búsqueda:', term)}
      />

<ContactList contacts={contacts} onSelectContact={openModal} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContent}>
          <ContactManager
            contact={selectedContact}
            onAddContact={addOrEditContact}
            onDeleteContact={deleteContact}
            onClose={closeModal}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F3E7FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'light',
  },
  addButton: {
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F3E7FF',
  },
  contactItem: {
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  contactPhoto: {width: 50, height: 50, borderRadius: 25},
});

export default ContactsScreen;
