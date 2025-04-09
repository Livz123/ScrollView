import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Contato = ({ nome, mensagem, horario }) => (
  <View style={styles.container}>
    <Image 
      source={{ uri: `https://i.pravatar.cc/150?u=${nome}` }} 
      style={styles.avatar} 
    />
    <View style={styles.info}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
    <Text style={styles.horario}>{horario}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16
  },
  mensagem: {
    color: '#666'
  },
  horario: {
    color: '#999',
    fontSize: 12
  }
});

export default Contato;