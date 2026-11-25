import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  imagem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 25,
  },
  textoDescricao: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 15,
  },
  versao: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  voltar: {
    textAlign: 'center',
    color: '#007BFF',
    fontSize: 14,
    marginTop: 10,
  },
});