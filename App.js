import React,{useState} from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import { AntDesign } from '@expo/vector-icons';

export default function App() {


	const [task,setTask] = useState();
	const [taskList,setTaskList] = useState([]);
	





	const getDateToday = () =>{
		return new Date();

	}
	 
	const castMonthTostring = (month) => {
		var months = ['jan', 'feb', 'March', 'avr', 'mai', 'juin'];
		return months[month];
	}
	const castDayOfTheWeekTostring = (day) => {
		
		var days = ['Sunday', 'Monday', 'mardi', 'mercredi', 'Thusday', 'vendredi', 'samedi'];
		return days[day];
	}

	const myFormatDate = () =>{
		return castDayOfTheWeekTostring(getDateToday().getDay()) + ', '+ getDateToday().getDate() + ' ' + castMonthTostring(getDateToday().getMonth()) + ' '+ getDateToday().getFullYear();
	}

	

  return (
    <View style={styles.container}>
      {/* Todays task*/}
      <View style={styles.taskWrapper}>

		<Text style={styles.sectionTitle}>{myFormatDate()}</Text>
		
	  {/*this is where the task will go!*/}
	 	<View style={styles.items}>

			<FlatList 
			data={taskList}
			renderItem ={({item})=>
				 <Task text={item}/>
			

			}
			/>
		

	  	</View>
	  </View>
	  {/*Write a Task*/}
	  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding":"height"} style={styles.writeTaskWrapper}>
	  <TextInput  style={styles.input} placeholder={'Write a Task '} onChangeText={(text)=>{setTask(text) } } value ={task} />
	  <TouchableOpacity onPress={()=>{
		setTaskList((oldTask)=>[...oldTask,...[task]])
	  }} >
		<View style ={styles.addWrapper}>
		<AntDesign name="pluscircle" size={45} color="#55BCF6"/>
		</View>
	  </TouchableOpacity>
	  </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper :{
	paddingTop:80,
	paddingHorizontal:20,
	
  },
  sectionTitle :{
	fontSize:24,
	fontWeight :'bold',

  },
  items:{
	marginTop :20,


  },
writeTaskWrapper :{
	position :'absolute',
	bottom : 40,
	width :'100%',
	flexDirection : 'row',
	justifyContent :'space-around',
	alignItems :'center',
	

},

input :{
	paddingVertical : 15,
	paddingHorizontal :15,
	backgroundColor:'#FFF',
	borderRadius :60,
	borderColor : '#C0C0C0',
	width:300,
	borderWidth : 1,
	
	
},

addWrapper :{
	

},

addText :{

},



});

