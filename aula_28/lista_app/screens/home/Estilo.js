import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a12',
    padding: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00f0ff',
    letterSpacing: 2,
  },
  subtitulo: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ffe600',
    letterSpacing: 1.5,
    marginBottom: 20,
  },
  input: {
    height: 45,
    backgroundColor: '#05050a',
    borderWidth: 1,
    borderColor: '#00f0ff',
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 14,
    color: '#ffffff',
  },
  operacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  botaoOp: {
    flex: 1,
    backgroundColor: '#12121f',
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00f0ff',
    alignItems: 'center',
  },
  botaoOpAtivo: {
    backgroundColor: '#00f0ff',
  },
  textoBotaoOp: {
    color: '#ffe600',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoCalcular: {
    backgroundColor: '#ffe600',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00f0ff',
    marginBottom: 10,
  },
  textoCalcular: {
    color: '#0a0a12',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 13,
  },
  resultado: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00f0ff',
    textAlign: 'center',
    marginBottom: 15,
  },
  tituloLista: {
    fontSize: 14,
    color: '#ffe600',
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 1,
  },
  item: {
    backgroundColor: '#12121f',
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00f0ff',
    marginBottom: 8,
  },
  nome: {
    color: '#ffffff',
    fontSize: 14,
    letterSpacing: 1,
  },
  vazio: {
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
  }
});

export default styles;