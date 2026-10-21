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
    backgroundColor: '#fff',
    borderRadius: 12,       
    padding: 25,            
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,          
  },
  imagem: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    height: 50,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 16,
    fontSize: 16,
  },
  botao: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default styles;