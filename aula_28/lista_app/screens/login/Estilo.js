import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a12', // Fundo escuro futurista
    padding: 20,
  },
  cardFormulario: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#12121f', // Card escuro
    borderRadius: 4,
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
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00f0ff',   // Detalhe ciano na imagem
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00f0ff',         // Azul Ciano Neon
    letterSpacing: 2,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#00f0ff',         // Texto do rótulo em Ciano
    letterSpacing: 1,
  },
  input: {
    height: 50,
    backgroundColor: '#05050a',
    borderWidth: 1,
    borderColor: '#00f0ff',   // Borda em ciano
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#ffffff',         // Texto digitado em branco
  },
  botao: {
    marginTop: 10,
    backgroundColor: '#ffe600',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00f0ff',
  },
  textoBotao: {
    color: '#0a0a12',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 14,
  },
});

export default styles;