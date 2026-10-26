import { View, Text, Button, Image } from 'react-native';
import styles from './Estilo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardFormulario}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Bem-vindo à Home!</Text>
        <Text style={styles.subtitulo}>Você está logado na aplicação.</Text>

        {/* Botão para Participantes */}
        <View style={styles.botao}>
          <Button
            title="Ver Participantes"
            onPress={() => navigation.navigate('Participantes')}
            color="#007AFF"
          />
        </View>

        {/* Botão para Escola */}
        <View style={[styles.botao, { marginTop: 10 }]}>
          <Button
            title="Sobre a Escola"
            onPress={() => navigation.navigate('Escola')}
            color="#28a745"
          />
        </View>

        {/* Botão para Voltar ao Login */}
        <View style={[styles.botao, { marginTop: 10 }]}>
          <Button
            title="Voltar para Login"
            onPress={() => navigation.navigate('Login')}
            color="#dc3545"
          />
        </View>
      </View>
    </View>
  );
}