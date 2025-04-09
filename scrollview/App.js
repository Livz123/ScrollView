import React, { useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import Contato from '/components/contato.jsx';

export default function App() {
  const [busca, setBusca] = useState('');
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

  const contatosFiltrados = contatos.filter(c =>
    c.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={{
      flex: 1,
      padding: 16,
      backgroundColor: '#f8f8f8'
    }}>
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
        placeholder="🔍 Buscar contato..."
        value={busca}
        onChangeText={setBusca}
        placeholderTextColor="#999"
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {contatosFiltrados.map(contato => (
          <Contato key={contato.id} {...contato} />
        ))}
      </ScrollView>
    </View>
  );
}
