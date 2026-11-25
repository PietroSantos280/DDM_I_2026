import { Text, View, Button, StyleSheet, Alert } from 'react-native';
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import styles from './estilo';

export default function Home({ navigation }) {
  const usuarioAtual = auth.currentUser;

  async function deslogar() {
    try {
      await signOut(auth);
      // Volta para a tela de Login
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível terminar a sessão.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo à Home! 🎉</Text>
      
      {usuarioAtual && (
        <Text style={styles.email}>
          Logado como: {usuarioAtual.email}
        </Text>
      )}

      <View style={styles.botaoContainer}>
        <Button 
          title="Ver Perfil" 
          onPress={() => navigation.navigate('Perfil')} 
        />
      </View>

      <View style={styles.botaoContainer}>
        <Button 
          title="Editar Dados" 
          onPress={() => navigation.navigate('Editar')} 
        />
      </View>

      <View style={styles.botaoContainer}>
        <Button 
          title="Sobre o App" 
          onPress={() => navigation.navigate('Sobre')} 
        />
      </View>

      <View style={[styles.botaoContainer, { marginTop: 30 }]}>
        <Button 
          title="Sair (Logout)" 
          color="#ff5c5c" 
          onPress={deslogar} 
        />
      </View>
    </View>
  );
}
