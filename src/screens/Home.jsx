import React from 'react';
import { StyleSheet, Text, View, CheckBox, ScrollView, Button,TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';



export default function Home({ navigation }) {
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
              <TouchableOpacity onPress={()=>navigation.navigate('PagamentoFormScreen')}><Text style={styles.botaoTexto}>Adicionar</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.contaDescricao}>
            <Text style={[styles.text, {fontSize:18}]}>Descrição: </Text> 
            <Text style={[styles.text, {fontSize:25}]}>Valor: </Text>
          </View>
          <View style={styles.contaDataVencimento}>
            <Text style={styles.textDataVencimento}>Data Vencimento: </Text>
            <Text style={styles.textDataVencimento}>Situação: </Text>
          </View>
        </View>
      
      </ScrollView>
    </SafeAreaView>
  
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202123',
   
  },
  text: {
    color: '#fff',

  },
  header: {
    backgroundColor: '#525356',
    justifyContent: 'space-between',
    borderRadius: 3,
  },
  logo: { 
    padding: 20,
    display: 'flex', 
    flexDirection: 'row',
  },
  borderLogo: { 
    padding: 20,
    backgroundColor: '#525356',
  },
  box: {
    margin: 15,
    padding: 10,
    display: 'flex',
    width:365,
    height:100,
    backgroundColor:'#525356',
    borderRadius: 10,
  },
  botaoTexto: {
    padding:10,
    flexDirection:'row',
    color: '#fff',
    backgroundColor: '#525356',

  },
  contaDescricao:{
    padding:10,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  contaDataVencimento:{
    padding:10,
    flexDirection:'row',
    justifyContent: 'flex-start',
  },
  textDataVencimento:{
    color: '#BCB7B8',
  },


});
