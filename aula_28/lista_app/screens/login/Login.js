import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './Estilo';
import { verificarLogin } from './Funcoe';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {
    if (verificarLogin(usuario, senha)) {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Erro',
        'Usuário ou senha incorretos!'
      );
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={styles.imagem}
      />
      <Text style={styles.titulo}>CYBER-LOGIN</Text>
      
      <Text style={styles.label}>Usuário</Text>
      <TextInput
        placeholder="Digite seu usuário"
        placeholderTextColor="#666"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        placeholderTextColor="#666"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={fazerLogin}
      >
        <Text style={styles.textoBotao}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}