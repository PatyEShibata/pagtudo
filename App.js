import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, CheckBox, ScrollView, Button,TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.app}>
          <View style={styles.header}>
            <View style={styles.borderLogo}>
              <View style={styles.logo}>
                <Text style={styles.text}>icone </Text>
                <Text style={styles.text}>PagTudo</Text>
              </View>
            </View>
            <View style={styles.botao}>
              <TouchableOpacity onPress={()=>{}}><Text style={styles.botaoTexto}>Adicionar</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.box}>
            <Text style={styles.text}>Descrição: </Text>
            <Text style={styles.text}>Data Vencimento: </Text>
            <Text style={styles.text}>Valor: </Text>
            <Text style={styles.text}>Situação: </Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text}>Descrição: </Text>
            <Text style={styles.text}>Data Vencimento: </Text>
            <Text style={styles.text}>Valor: </Text>
            <Text style={styles.text}>Situação: </Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text}>Descrição: </Text>
            <Text style={styles.text}>Data Vencimento: </Text>
            <Text style={styles.text}>Valor: </Text>
            <Text style={styles.text}>Situação: </Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text}>Descrição: </Text>
            <Text style={styles.text}>Data Vencimento: </Text>
            <Text style={styles.text}>Valor: </Text>
            <Text style={styles.text}>Situação: </Text>
        </View>
      
      </ScrollView>
    </SafeAreaView>
  
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08090B',
   
  },
  text: {
    color: '#fff',

  },
  header: {
    backgroundColor: '#525356',
    display: 'wrap',
    justifyContent: 'space-between',
    borderLogo: 3,
  },
  logo: { 
    padding: 20,
    display: 'flex', 
    flexDirection: 'row'
  },
  borderLogo: { 
    padding: 20,
    backgroundColor: '#525356'
  },
  box: {
    margin: 15,
    padding: 10,
    display: 'flex',
    width:325,
    height:100,
    backgroundColor:'#525356',
    borderRadius: 10,
  },
  botaoTexto: {
    padding:10,
    flexDirection:'row',
    color: '#fff',
    backgroundColor: '#525356',

  }


});
