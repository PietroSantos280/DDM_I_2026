import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Estilo';

export default function Personagens({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardFormulario}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>CYBER_NET // OPERADORES</Text>
        <Text style={styles.subtitulo}>NETRUNNERS REGISTRADOS</Text>

        <View style={styles.blocoMembros}>
          <Text style={styles.nomeMembro}>[01] David Martinez</Text>
          <Text style={styles.nomeMembro}>[02] Lucy Kushinada</Text>
        </View>

        <View style={styles.grupoBotoes}>
          <TouchableOpacity 
            style={styles.botaoCyberPrimario}
            onPress={() => navigation.navigate('Jogo')}
          >
            <Text style={styles.textoBotaoEscuro}>ACESSAR_DADOS_JOGO</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.botaoCyberSecundario}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.textoBotaoClaro}>RETORNAR_HOME</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}