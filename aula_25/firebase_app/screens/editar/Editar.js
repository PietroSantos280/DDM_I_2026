import { Text, View, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import estilos from './estilo';

export default function Editar({ navigation }) {
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(true);

  // Carrega os dados atuais do usuário ao abrir a tela
  useEffect(() => {
    async function carregarDados() {
      try {
        const usuarioAtual = auth.currentUser;
        if (usuarioAtual) {
          const docRef = doc(db, 'usuarios', usuarioAtual.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setNome(docSnap.data().nome || '');
          }
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Erro', 'Não foi possível carregar os dados.');
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  async function atualizarDados() {
    if (!nome) {
      Alert.alert('Atenção', 'O campo nome não pode estar vazio.');
      return;
    }

    try {
      const usuarioAtual = auth.currentUser;
      if (!usuarioAtual) return;

      // Atualiza o documento do usuário no Firestore
      const docRef = doc(db, 'usuarios', usuarioAtual.uid);
      await updateDoc(docRef, {
        nome: nome,
      });

      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível atualizar os dados.');
    }
  }

  return (
    <View style={estilos.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>
        Editar Perfil
      </Text>
      
      <Text style={estilos.texto}>
        Nome
      </Text>
      <TextInput
        placeholder="Digite seu novo nome"
        style={estilos.input}
        value={nome}
        onChangeText={setNome}
      />

      <View style={estilos.botao}>
        <Button
          title={loading ? "Carregando..." : "Salvar Alterações"}
          onPress={atualizarDados}
          disabled={loading}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text style={estilos.voltar}>
          Voltar para Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}
