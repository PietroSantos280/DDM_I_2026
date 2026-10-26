import { View, Text, Button, Image } from 'react-native';
import styles from './Estilo';

export default function Escola({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardFormulario}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>ETEC MCM</Text>
        <Text style={styles.subtitulo}>Ribeirão Pires - SP</Text>
        
        <Text style={styles.descricao}>
          Ensino Médio com Habilitação Profissional de Técnico em Informática para Internet.
        </Text>

        <View style={styles.grupoBotoes}>
          <View style={styles.botao}>
            <Button
              title="Ver os Participantes"
              onPress={() => navigation.navigate('Participantes')}
              color="#007AFF"
            />
          </View>

          <View style={[styles.botao, { marginTop: 10 }]}>
            <Button
              title="Voltar ao Início"
              onPress={() => navigation.navigate('Home')}
              color="#6c757d"
            />
          </View>
        </View>
      </View>
    </View>
  );
}