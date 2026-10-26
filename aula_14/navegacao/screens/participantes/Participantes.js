import { View, Text, Button, Image } from 'react-native';
import styles from './Estilo';

export default function Participantes({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardFormulario}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Nossa Dupla</Text>
        <Text style={styles.membro}>Integrantes:</Text>
        <Text style={styles.nomeMembro}>Henrique Araujo</Text>
        <Text style={styles.nomeMembro}>Pietro Andrade</Text>

        <View style={styles.grupoBotoes}>
          <View style={styles.botao}>
            <Button
              title="nossa Escola"
              onPress={() => navigation.navigate('Escola')}
              color="#007AFF"
            />
          </View>

          <View style={styles.botao}>
            <Button
              title="Voltar para Home"
              onPress={() => navigation.navigate('Home')}
              color="#6c757d"
            />
          </View>
        </View>
      </View>
    </View>
  );
}