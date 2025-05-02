import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { streamingQualities } from '../../dummies/Dummies'

const QualityModal = ({qualityModalVisible,setQualityModalVisible,selectedQuality,setSelectedQuality}) => {

  return (
    <Modal
    visible={qualityModalVisible}
    transparent={true}
    animationType="slide"
    onRequestClose={() => setQualityModalVisible(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Select Streaming Quality</Text>
          <TouchableOpacity onPress={() => setQualityModalVisible(false)}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
        </View>

        {streamingQualities.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={[
              styles.qualityButton,
              selectedQuality === item.label ? styles.qualityButtonSelected : null,
            ]}
            onPress={() => setSelectedQuality(item.label)}
          >
            <View style={styles.qualityTextContainer}>
              <Text style={styles.qualityLabel}>{item.label}</Text>
              <Text style={styles.qualityDescription}>{item.description}</Text>
            </View>
            <View style={selectedQuality === item.label ? styles.filledCircle : styles.emptyCircle} />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.doneButton} onPress={() => setQualityModalVisible(false)}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
  )
}

export default QualityModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: '#0D0D0D',
        width: '85%',
        padding: 20,
        alignItems: 'center',
      },
      modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 15,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
      closeButton: {
        fontSize: 18,
        color: '#FFFFFFBF',
      },
    qualityButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0000001F',
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '100%',
        marginBottom: 10,
      },
      qualityButtonSelected: {
        backgroundColor: '#FFFFFF1F',
      },
      qualityTextContainer: {
        flexDirection: 'column',
      },
      qualityLabel: {
        fontSize: 16,
        color: '#FFFFFF',
      },
      qualityDescription: {
        fontSize: 14,
        color: '#BBBBBB',
      },
      emptyCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#FFFFFF',
      },
      filledCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
      },
      doneButton: {
        backgroundColor: '#D3D3D3',
        width: '100%', // Ensures it matches modal width
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 15,
      },
      doneButtonText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
      },
})