import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
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

        <Text style={styles.titulo}>CYBER_NET // HOME</Text>
        <Text style={styles.subtitulo}>SISTEMA CONECTADO COM SUCESSO</Text>

        {/* Botão para Participantes */}
        <TouchableOpacity 
          style={styles.botaoCyberPrimario}
          onPress={() => navigation.navigate('Personagens')}
        >
          <Text style={styles.textoBotaoEscuro}>ACESSAR_PERSONAGENS</Text>
        </TouchableOpacity>

        {/* Botão para Escola / Jogo */}
        <TouchableOpacity 
          style={styles.botaoCyberSecundario}
          onPress={() => navigation.navigate('Jogo')}
        >
          <Text style={styles.textoBotaoClaro}>DADOS_DO_JOGO</Text>
        </TouchableOpacity>

        {/* Botão para Voltar ao Login */}
        <TouchableOpacity 
          style={styles.botaoCyberAlerta}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoBotaoClaro}>ENCERRAR_SESSÃO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}