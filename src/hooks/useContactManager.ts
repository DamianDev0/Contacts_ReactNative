import {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {Contact} from '../interfaces/Contact.interface';

interface UseContactManagerProps {
  contact: Contact | null;
  onAddContact: (contact: Contact) => void;
  onDeleteContact: (contact: Contact) => void;
}

const useContactManager = ({
  contact,
  onAddContact,
  onDeleteContact,
}: UseContactManagerProps) => {
  const [name, setName] = useState<string>(contact?.name || '');
  const [phone, setPhone] = useState<string>(contact?.phone || '');
  const [email, setEmail] = useState<string>(contact?.email || '');
  const [photo, setPhoto] = useState<string | null>(contact?.photo || null);
  const [role, setRole] = useState<string>(contact?.role || '');
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const selectImage = () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'photo', quality: 1},
      (response: ImagePicker.ImagePickerResponse) => {
        if (
          !response.didCancel &&
          !response.errorMessage &&
          response.assets &&
          response.assets.length > 0
        ) {
          setPhoto(response.assets[0].uri ?? null);
        }
      },
    );
  };

  const saveContact = () => {
    if (!name || !phone || !email || !role) {
      console.log('All fields are required');
      return;
    }

    const newContact: Contact = {name, phone, email, photo, role};
    console.log('Saving contact:', newContact);
    onAddContact(newContact);
  };

  const openDeleteModal = () => setDeleteModalVisible(true);
  const closeDeleteModal = () => setDeleteModalVisible(false);

  const confirmDelete = () => {
    if (contact) {
      onDeleteContact(contact);
      closeDeleteModal();
    }
  };

  return {
    name,
    phone,
    email,
    photo,
    deleteModalVisible,
    role,
    setName,
    setPhone,
    setEmail,
    selectImage,
    saveContact,
    openDeleteModal,
    closeDeleteModal,
    confirmDelete,
    setRole,
  };
};

export default useContactManager;
