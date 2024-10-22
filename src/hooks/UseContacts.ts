import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Contact} from '../interfaces/Contact.interface';

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const loadContactsFromStorage = async () => {
    try {
      const storedContacts = await AsyncStorage.getItem('contacts');
      if (storedContacts) {
        setContacts(JSON.parse(storedContacts) as Contact[]);
      }
    } catch (error) {
      Alert.alert('Error', 'Error loading contacts');
    }
  };

  const saveContactsToStorage = async (updatedContacts: Contact[]) => {
    try {
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));
      console.log('Contacts saved successfully:', updatedContacts);
    } catch (error) {
      Alert.alert('Error', 'Error saving contacts');
      console.log('Error saving contacts:', error);
    }
  };

  const addOrEditContact = (newContact: Contact) => {
    let updatedContacts;
    if (selectedContact) {
      updatedContacts = contacts.map(contact =>
        contact.phone === selectedContact.phone ? newContact : contact,
      );
    } else {
      updatedContacts = [...contacts, newContact];
    }
    setContacts(updatedContacts);
    saveContactsToStorage(updatedContacts);
    closeModal();
  };

  const deleteContact = (contactToDelete: Contact) => {
    const updatedContacts = contacts.filter(
      contact => contact.phone !== contactToDelete.phone,
    );
    setContacts(updatedContacts);
    saveContactsToStorage(updatedContacts);
    closeModal();
  };

  const openModal = (contact?: Contact) => {
    setSelectedContact(contact || null);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedContact(null);
  };

  useEffect(() => {
    loadContactsFromStorage();
  }, []);

  return {
    contacts,
    selectedContact,
    modalVisible,
    openModal,
    closeModal,
    addOrEditContact,
    deleteContact,
  };
};
