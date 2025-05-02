import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { column1Languages, column2Languages } from '../../dummies/Dummies'
import { SVG } from '../../assets';

const LanguageSelectionModal = ({modalVisible,setModalVisible,selectedLanguages,setSelectedLanguages}) => {

    const selectLanguage = (column, language) => {
        setSelectedLanguages((prev) => ({
          ...prev,
          [column]: language,
        }));
      };

  return (
    <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Language(s)</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Language Selection Grid */}
            <View style={styles.languageGrid}>
              {[...column1Languages, ...column2Languages].map((lang) => (
                <TouchableOpacity
                  key={lang}
                  style={[
                    styles.languageButton,
                    selectedLanguages.column1 === lang || selectedLanguages.column2 === lang
                      ? styles.languageButtonSelected
                      : null,
                  ]}
                  onPress={() =>
                    selectedLanguages.column1 === lang
                      ? selectLanguage('column1', lang)
                      : selectLanguage('column2', lang)
                  }
                >
                  {selectedLanguages.column1 === lang || selectedLanguages.column2 === lang ? (
                    <SVG.check style={styles.checkIcon} />
                  ) : null}
                  <Text style={styles.languageText}>{lang}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Done Button */}
            <TouchableOpacity style={styles.doneButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

export default LanguageSelectionModal

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
      languageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
      },
      languageButton: {
        backgroundColor: '#0000001F',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '47%',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8,
        flexDirection: 'row', // Align checkmark and text
      },
      languageButtonSelected: {
        backgroundColor: '#FFFFFF1F',
      },
      checkIcon: {
        marginRight: 8, // Space between checkmark and text
      },
      languageText: {
        fontSize: 16,
        color: '#FFFFFFBF',
        textAlign: 'left',
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