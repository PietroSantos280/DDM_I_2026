import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  
  cardFormulario: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  botao: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default styles;