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
    marginBottom: 20,
  },
  rotulo: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    marginTop: 5,
  },
  valor: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textoCarregando: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  botao: {
    marginBottom: 15,
  },
  voltar: {
    textAlign: 'center',
    color: '#007BFF',
    fontSize: 14,
    marginTop: 10,
  },
});