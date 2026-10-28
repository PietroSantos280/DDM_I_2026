import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a12', // Fundo escuro azulado
    padding: 20,
  },

  // Card centralizador
  cardFormulario: {
    width: '100%',
    maxWidth: 400,         
    backgroundColor: '#12121f', // Card cinza/azul escuro
    borderRadius: 4,          // Bordas retas no estilo tech
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

  // Imagem
  imagem: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00f0ff',   // Detalhe ciano na imagem
  },

  // Textos e Títulos
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
    marginBottom: 20,
  },
  label: {
    width: '100%',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#a0a0c0',         // Cinza futurista
    letterSpacing: 1,
  },

  // Inputs
  input: {
    width: '100%',
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

  // Blocos de Conteúdo Interno (Personagens e Descrição do Jogo)
  blocoMembros: {
    width: '100%',
    backgroundColor: '#05050a',
    borderWidth: 1,
    borderColor: '#00f0ff',
    borderRadius: 4,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  membro: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a0a0c0',
    marginBottom: 5,
    letterSpacing: 1,
  },
  nomeMembro: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginVertical: 4,
  },
  blocoDescricao: {
    width: '100%',
    backgroundColor: '#05050a',
    borderWidth: 1,
    borderColor: '#00f0ff',
    borderRadius: 4,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  descricao: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: 1.2,
    lineHeight: 18,
    fontWeight: 'bold',
  },

  // Grupos e Estilos dos Botões Cyberpunk
  grupoBotoes: {
    width: '100%',
    gap: 10,
  },
  botaoCyber: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#ffe600', // Amarelo neon
    paddingVertical: 15,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00f0ff',
  },
  botaoCyberPrimario: {
    width: '100%',
    backgroundColor: '#ffe600', // Amarelo neon
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00f0ff',
  },
  botaoCyberSecundario: {
    width: '100%',
    backgroundColor: '#05050a', // Fundo escuro com borda ciano
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00f0ff',
  },
  botaoCyberAlerta: {
    width: '100%',
    backgroundColor: '#05050a',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff3366',   // Tom de alerta avermelhado para logout
  },

  // Textos dos Botões
  textoBotao: {
    color: '#0a0a12',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 14,
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