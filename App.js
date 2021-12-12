import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const [list,setList] = useState([])
  const [textInput,setTextinput] = useState("")

  const onAdd = () =>{
    setList([... list,
      {id:Math.random().toString(), value:textInput}])
  }

  const onDelete = (id) =>{
    setList(list.filter(i => i.id != id))
  }
  console.log(list)
  return (
    <View style={styles.container}>
      <Text
      style={styles.title}>Lista de compras</Text>
      <View>
          <TextInput
          placeholder="Ingrese un elemento"
          style={styles.input}
          onChangeText={(text)=> setTextinput(text)}
          />
         
          <Button
          title="Agregar"
          color="darkslategrey"
          onPress={()=> onAdd()} />
      </View>
      <View>
        {
          list.length > 0 ? list.map(i=>
            <View style={{flexDirection:"row",marginTop:"1rem"}}>
              <Text style={{color:"white",fontWeight:"bold",fontSize:18}}> {i.value} </Text>
              <Button
              color="darkslategrey"
              title="X"
              onPress={()=> onDelete(i.id)}
              ></Button>
            </View>)
            :
            <Text style={{marginTop:"1rem",fontWeight:"bold",color:"white",fontSize:18}}>No hay Tareas</Text>
        }

      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title:{
    fontWeight:"bold",
    color:"white"
  },
  input:{
    backgroundColor:"white",
    marginTop:"1rem",
    marginBottom:"1rem",
    height: 25
  },
  button:{
    height: 21
  }

});
