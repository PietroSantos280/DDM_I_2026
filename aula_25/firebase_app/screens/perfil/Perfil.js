import { Text, View, Button, Image, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import estilos from './estilo';

export default function Perfil({ navigation }) {
  const [dadosUsuario, setDadosUsuario] = useState({ nome: '', email: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarPerfil() {
      try {
        const usuarioAtual = auth.currentUser;
        if (usuarioAtual) {
          const docRef = doc(db, 'usuarios', usuarioAtual.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setDadosUsuario({
              nome: docSnap.data().nome || 'Não informado',
              email: usuarioAtual.email,
            });
          } else {
            setDadosUsuario({
              nome: 'Usuário',
              email: usuarioAtual.email,
            });
          }
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Erro', 'Não foi possível carregar o perfil.');
      } finally {
        setLoading(false);
      }
    }

    buscarPerfil();
  }, []);

  return (
    <View style={estilos.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>Meu Perfil</Text>

      {loading ? (
        <Text style={estilos.textoCarregando}>A carregar dados...</Text>
      ) : (
        <View style={estilos.card}>
          <Text style={estilos.rotulo}>Nome:</Text>
          <Text style={estilos.valor}>{dadosUsuario.nome}</Text>

          <Text style={estilos.rotulo}>E-mail:</Text>
          <Text style={estilos.valor}>{dadosUsuario.email}</Text>
        </View>
      )}

      <View style={estilos.botao}>
        <Button
          title="Editar Dados"
          onPress={() => navigation.navigate('Editar')}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={estilos.voltar}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}