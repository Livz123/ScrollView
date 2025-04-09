// Importa as bibliotecas necessárias do React e React Native
import React, { useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import Contato from '/components/contato.jsx'; // Componente customizado que representa cada contato

// Componente principal da aplicação
export default function App() {
  // Hook de estado para armazenar o valor de busca
  const [busca, setBusca] = useState('');

  // Lista de contatos com nome, mensagem e horário
  const contatos = [
    { id: '1', nome: 'Davi', mensagem: 'Iae princesa', horario: '14:25' },
    { id: '2', nome: 'Grazi', mensagem: 'Vamos assistir MLP', horario: '18:09' },
    { id: '3', nome: 'Clacla', mensagem: 'Entra ai nos Stardew Valley', horario: '04:20' },
    { id: '4', nome: 'Gabriel', mensagem: 'E o onibus??', horario: '11:58' },
    { id: '5', nome: 'Jhon', mensagem: 'Entra Disc', horario: '17:30' },
    { id: '6', nome: 'Jo', mensagem: 'Me empresta tua mascara', horario: '09:15' },
    { id: '7', nome: 'Lavina', mensagem: 'vamo na selfit', horario: '10:32' },
    { id: '8', nome: 'Maysa', mensagem: 'eii', horario: '09:54' },
    { id: '9', nome: 'fulano', mensagem: 'lorem ipsum', horario: '10:32' },
    { id: '10', nome: 'sicrano', mensagem: 'lorem ipsum', horario: '09:54' }
  ];

  // Filtra os contatos com base na busca (case insensitive)
  const contatosFiltrados = contatos.filter(c =>
    c.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={{
      flex: 1,
      padding: 16,
      backgroundColor: '#f8f8f8'
    }}>
      {/* Campo de busca com estilo customizado */}
      <TextInput
        style={{
          height: 45,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          paddingHorizontal: 12,
          marginBottom: 16,
          backgroundColor: '#fff'
        }}
        placeholder="Buscar contato..." // Texto exibido antes de digitar
        value={busca}
        onChangeText={setBusca} // Atualiza o estado da busca
        placeholderTextColor="#999"
      />

      {/* Lista de contatos renderizada verticalmente usando ScrollView */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Renderiza um componente <Contato /> para cada contato filtrado */}
        {contatosFiltrados.map(contato => (
          <Contato key={contato.id} {...contato} />
        ))}
      </ScrollView>
    </View>
  );
}
