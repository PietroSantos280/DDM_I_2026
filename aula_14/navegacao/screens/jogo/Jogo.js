import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Estilo';

export default function Jogo({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardFormulario}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>NIGHT_CITY // PROTOCOL</Text>
        <Text style={styles.subtitulo}>STATUS: MUNDO ABERTO / RPG</Text>
        
        <View style={styles.blocoDescricao}>
          <Text style={styles.descricao}>
            MERGULHE NAS SOMBRAS DA MEGA-CIDADE. MELHORE SEUS CIBERWARE, HACKEIE REDES CORPORATIVAS E SOBREVIVA ÀS GUERRAS DE FACÇÕES NO SUBMUNDO DIGITAL.
          </Text>
        </View>

        <View style={styles.grupoBotoes}>
          <TouchableOpacity 
            style={styles.botaoCyberPrimario}
            onPress={() => navigation.navigate('Personagens')}
          >
            <Text style={styles.textoBotaoEscuro}>VER_OPERADORES</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.botaoCyberSecundario}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.textoBotaoClaro}>RETORNAR_INÍCIO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}