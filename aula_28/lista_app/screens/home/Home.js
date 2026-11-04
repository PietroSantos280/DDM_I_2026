import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import styles from './Estilo';
import { realizarCalculo } from './Funcoe';

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState('');
  
  // Lista para armazenar o histórico de resultados recentes
  const [historico, setHistorico] = useState([]);

  function calcularEGuardar() {
    // Executa a lógica de cálculo original
    realizarCalculo(numero1, numero2, operacao, (res) => {
      setResultado(res);
      
      // Se o resultado for válido, adiciona ao topo da lista de histórico recente
      if (res !== 'Operação inválida') {
        const novoItem = {
          id: Date.now().toString(),
          expressao: `${numero1} ${operacao} ${numero2} = ${res}`
        };
        setHistorico((prevHistorico) => [novoItem, ...prevHistorico.slice(0, 4)]); // Mantém os últimos 5
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>NEO-CALC</Text>
      <Text style={styles.subtitulo}>Calculadora & Histórico Recente</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.operacoes}>
        {['+', '-', '*', '/'].map((op) => (
          <TouchableOpacity
            key={op}
            style={[styles.botaoOp, operacao === op && styles.botaoOpAtivo]}
            onPress={() => setOperacao(op)}
          >
            <Text style={styles.textoBotaoOp}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.botaoCalcular}
        onPress={calcularEGuardar}
      >
        <Text style={styles.textoCalcular}>PROCESSAR CÁLCULO</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        Resultado: {resultado}
      </Text>

      <Text style={styles.tituloLista}>Histórico Recente:</Text>
      
      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>⚡ {item.expressao}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum cálculo recente registrado.</Text>
        }
      />
    </View>
  );
}