import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../screens/fireBase/FireBase'; // Update path if needed

const ForgotPasswordModal = ({ forgotPasswordVisible, setForgotPasswordVisible, email, setEmail }) => {

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Success', 'Password reset email sent. Please check your inbox.');
      setForgotPasswordVisible(false);
      setEmail(''); // Clear email input after success
    } catch (error) {
      console.log('Forgot Password Error:', error);
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'No user found with this email.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'Invalid email format.');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <Modal transparent visible={forgotPasswordVisible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.headerText}>Forgot Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#FFFFFFBF"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setForgotPasswordVisible(false)} style={styles.closeButton}>
            <Text style={{ color: 'white' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ForgotPasswordModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#A0A0A0',
    width: '100%',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
  },
});
