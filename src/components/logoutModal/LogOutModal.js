import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import { auth } from '../../screens/fireBase/FireBase';  // Adjust the path if needed
import { SCREEN } from '../../enums';
;  // Adjust the path if needed

const LogOutModal = ({ logoutModalVisible, setLogoutModalVisible }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setLogoutModalVisible(false);

        // Reset navigation to LoginScreen after logout
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: SCREEN.LOGIN_SCREEN }],
          })
        );
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <Modal transparent={true} visible={logoutModalVisible} animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.logoutModalContainer}>
          {/* Header Section */}
          <View style={styles.logoutHeader}>
            <View></View>
            <Text style={styles.logoutTitle}>Logout</Text>
            <TouchableOpacity onPress={() => setLogoutModalVisible(false)}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Message Section */}
          <Text style={styles.logoutMessage}>
            Are you sure you want to logout of Musico?
          </Text>

          {/* Logout Button */}
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LogOutModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  logoutModalContainer: {
    width: '80%',
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  logoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  logoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  closeIcon: {
    fontSize: 20,
    color: 'white',
  },
  logoutMessage: {
    color: '#B0B0B0',
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
  },
  logoutButton: {
    width: '100%',
    backgroundColor: '#A0A0A0',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
