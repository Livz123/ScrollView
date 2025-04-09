// Importa as bibliotecas necessárias do React e React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Componente funcional que representa um contato individual
// Recebe as props: nome, mensagem e horario
const Contato = ({ nome, mensagem, horario }) => (
  <View style={styles.container}>
    {/* Avatar gerado dinamicamente com base no nome do contato */}
    <Image 
      source={{ uri: `https://i.pravatar.cc/150?u=${nome}` }} 
      style={styles.avatar} 
    />
    
    {/* Informações de nome e mensagem do contato */}
    <View style={styles.info}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>

    {/* Horário da última mensagem */}
    <Text style={styles.horario}>{horario}</Text>
  </View>
);

// Estilos aplicados ao componente usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',           // Alinha elementos horizontalmente
    padding: 10,                    // Espaçamento interno
    borderBottomWidth: 1,          // Linha separadora inferior
    borderBottomColor: '#eee',     // Cor da linha inferior
    alignItems: 'center'           // Alinha itens verticalmente ao centro
  },
  avatar: {
    width: 50,                      // Largura da imagem
    height: 50,                     // Altura da imagem
    borderRadius: 25,              // Torna a imagem circular
    marginRight: 10                // Espaço à direita da imagem
  },
  info: {
    flex: 1                         // Ocupa o espaço restante
  },
  nome: {
    fontWeight: 'bold',            // Deixa o nome em negrito
    fontSize: 16                   // Tamanho da fonte do nome
  },
  mensagem: {
    color: '#666'                  // Cor de texto mais clara para a mensagem
  },
  horario: {
    color: '#999',                 // Cor ainda mais clara para o horário
    fontSize: 12                   // Fonte menor para o horário
  }
});

// Exporta o componente para ser utilizado em outros arquivos
export default Contato;
