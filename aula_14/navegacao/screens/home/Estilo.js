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
    alignItems: 'center',
    shadowColor: '#ffe600',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  imagem: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00f0ff',   // Detalhe ciano na imagem
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00f0ff',         // Azul Ciano Neon
    letterSpacing: 2,
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 10,
    textAlign: 'center',
    color: '#ffe600',         // Amarelo Neon
    letterSpacing: 1.5,
    marginBottom: 24,
  },
  // Estilos dos botões cyberpunk
  botaoCyberPrimario: {
    width: '100%',
    backgroundColor: '#ffe600',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00f0ff',
    marginBottom: 12,
  },
  botaoCyberSecundario: {
    width: '100%',
    backgroundColor: '#05050a',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00f0ff',
    marginBottom: 12,
  },
  botaoCyberAlerta: {
    width: '100%',
    backgroundColor: '#05050a',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff3366',   // Tom de alerta avermelhado/rosa suave para logout
    marginBottom: 4,
  },
  textoBotaoEscuro: {
    color: '#0a0a12',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 13,
  },
  textoBotaoClaro: {
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 13,
  }
});

export default styles;