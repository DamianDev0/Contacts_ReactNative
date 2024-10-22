// ContactList.tsx
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Contact} from '../interfaces/Contact.interface';

interface ContactListProps {
  contacts: Contact[];
  onSelectContact: (contact: Contact) => void;
}

const ContactList = ({contacts, onSelectContact}: ContactListProps) => {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onSelectContact(item)}>
          <View style={styles.contactItem}>
            <View style={styles.contactDetails}>
              <View style={styles.detailRow}>
                <Icon name="user" size={18} color="#000" style={styles.icon} />
                <Text>{item.name}</Text>
              </View>

              <View style={styles.detailRow}>
                <Icon name="phone" size={18} color="#000" style={styles.icon} />
                <Text>{item.phone}</Text>
              </View>

              <View style={styles.detailRow}>
                <Icon
                  name="envelope"
                  size={18}
                  color="#000"
                  style={styles.icon}
                />
                <Text>{item.email}</Text>
              </View>

              <View style={styles.detailRow}>
                <Icon
                  name="briefcase"
                  size={18}
                  color="#000"
                  style={styles.icon}
                />
                <Text>{item.role}</Text>
              </View>
            </View>

            {item.photo && (
              <Image source={{uri: item.photo}} style={styles.contactPhoto} />
            )}
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contactItem: {
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    margin: 'auto',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    textTransform: 'capitalize',
  },
  contactPhoto: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  contactDetails: {
    flex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 14,
  },
});

export default ContactList;
