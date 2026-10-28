import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a12', // Fundo bem escuro, quase preto azulado
    padding: 20,
  },
  cardFormulario: {
    width: '100%',
    maxWidth: 400,         
    backgroundColor: '#12121f', // Tom escuro para o card
    borderRadius: 4,          // Bordas retas no estilo tech
    borderWidth: 1,
    borderColor: '#ffe600',   // Borda neon amarela
    padding: 25,              
    shadowColor: '#ffe600',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,             
  },
  imagem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00f0ff',   // Detalhe ciano na imagem
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00f0ff',         // Azul Ciano Neon
    letterSpacing: 2,
  },
  subtitulo: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 24,
    color: '#ffe600',         // Amarelo Neon
    letterSpacing: 1.5,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#a0a0c0',         // Cinza futurista
    letterSpacing: 1,
  },
  input: {
    height: 50,
    backgroundColor: '#05050a',
    borderWidth: 1,
    borderColor: '#00f0ff',   // Borda ciano nos inputs
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 16,
    fontSize: 16,
    color: '#ffffff',         // Texto digitado em branco
  },
  botaoCyber: {
    marginTop: 10,
    backgroundColor: '#ffe600', // Botão em amarelo neon
    paddingVertical: 15,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00f0ff',
  },
  textoBotao: {
    color: '#0a0a12',         // Texto escuro para destacar no fundo amarelo
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 14,
  }
});

export default styles;