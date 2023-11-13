import * as React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';



const DATA = [
    {id: '000-933', Lastname: 'Antopina' ,Firstname: 'Deborah Jane', address:'Tagbilaran, Bohol',},
    {id: '000-944', Lastname: 'Amang',Firstname:'Jesse',address:'Corella, Bohol',},
    {id: '000-911', Lastname: 'Amora',Firstname: 'Kent Ivan', address:'Cortes, Bohol',},
    {id: '000-855', Lastname: 'Angcahan', Firstname:'Ria Mae', address:'Catigbian, Bohol',},
    {id: '000-874', Lastname: 'Ayuban', Firstname:'Katherine Mae', address:'Dauis, Bohol',},
    {id: '000-966', Lastname: 'Banaga', Firstname:'Bernadeth', address:'Loboc, Bohol',},
    {id: '000-984', Lastname: 'Bongcaras', Firstname:'Airen Mae', address:'Dauis, Bohol',},
    {id: '000-932', Lastname: 'Bucia', Firstname:'James Warren', address:'Cortes, Bohol',},
    {id: '000-912', Lastname: 'Bunol', Firstname:'Raymond', address:'Cortes, Bohol',},
    {id: '000-827', Lastname: 'Carbonilla', Firstname:'Marlon', address:'Antiquera, Bohol',},
    {id: '000-754', Lastname: 'Coquilla', Firstname:'Nathaniel Louise', address:'Antiquera, Bohol',},
    {id: '000-763', Lastname: 'Dalen', Firstname:'Rhizabelle Jhaine', address:'Dauis, Bohol',},
    {id: '000-122', Lastname: 'Dela Cruz', Firstname:'Mary Anne', address:'Balilihan, Bohol',},
    {id: '000-242', Lastname: 'Dondoyano', Firstname:'Sherline Rose', address:'Balilihan, Bohol',} ,
    {id: '000-452', Lastname: 'Escuadro', Firstname:'Nelbrey Jillian', address:'Lapaz, Cortes, Bohol',},
    {id: '000-356', Lastname: 'Eusalan', Firstname:'Daisy Dianne', address:'Dauis, Bohol',},
    {id: '000-451', Lastname: 'Felisilda', Firstname:'Arnold James', address:'Valencia, Bohol',},
    {id: '000-647', Lastname: 'Fuentes', Firstname:'Loui', address:'Corella, Bohol',},
    {id: '000-951', Lastname: 'Garcia', Firstname:'Rodel', address:'Hanopol, Bohol',},
    {id: '000-123', Lastname: 'Jagunos', Firstname:'Joana', address:'Hanopol, Bohol',},
    {id: '000-659', Lastname: 'Juntilla', Firstname:'Hershiel Jay', address:'Sevilla, Bohol',},
    {id: '000-969', Lastname: 'Lahoy', Firstname:'Sherwen', address:'Cortes, Bohol',},
    {id: '000-741',  Lastname: 'Linog', Firstname:'Jesriel', address:'Sevilla, Bohol',},
    {id: '000-813', Lastname: 'Luayon', Firstname:'Hazel Mae', address:'Corella, Bohol',},
    {id: '000-252', Lastname: 'Madanguit', Firstname:'Rusel Nino', address:'Cortes, Bohol',},
    {id: '000-361', Lastname: 'Magale', Firstname:'Pearly Diane', address:'Maribojoc, Bohol',}, 
    {id: '000-314', Lastname: 'Magsino', Firstname:'Lovelyn', address:'Catigbian, Bohol',},
    {id: '000-543', Lastname: 'Malanguis', Firstname:'Donilyn', address:'Corella, Bohol',},
    {id: '000-561', Lastname: 'Maldora', Firstname:'Angelo', address:'Catigbian, Bohol',},
    {id: '000-394', Lastname: 'Marabulas', Firstname:'Ailen Mae', address:'Catigbian, Bohol',},
    {id: '000-185', Lastname: 'Maslog', Firstname:'Cloyd', address:'Tagbilaran, Bohol',},
    {id: '000-923', Lastname: 'Mirabite', Firstname:'Mic Roland', address:'Maribojoc, Bohol',},
    {id: '000-713', Lastname: 'Oring', Firstname:'Jea Norene', address:'Boctol, Bohol',},
    {id: '000-847', Lastname: 'Paguican', Firstname:'Nicole James', address:'Jagna, Bohol',},
    {id: '000-333', Lastname: 'Pajota', Firstname:'Arnel', address:'Tagbilaran, Bohol',},
    {id: '000-669', Lastname: 'Pilipino', Firstname:'Jesrel',address:'Tagbilaran, Bohol',},
    {id: '000-888', Lastname: 'Sarabia', Firstname:'Earl Mike',address:'Tagbilaran, Bohol',},
    {id: '000-445', Lastname: 'Saraga', Firstname:'Sheilo',address:'Catigbian, Bohol',},
    {id: '000-657', Lastname: 'Tabanyag', Firstname:'John',address:'Cortes, Bohol',},
    {id: '000-111',  Lastname: 'Tadlas', Firstname:'Kenneth',address:'Tagbilaran, Bohol',},
    {id: '000-833', Lastname: 'Tahil', Firstname:'Adriane Jane',address:'Hanopol, Bohol' ,},
    {id: '000-555', Lastname: 'Tinaja', Firstname:'Ma. Luisa', address:'Tagbilaran, Bohol',},
    {id: '000-999', Lastname: 'Valiente', Firstname:'Melrose', address:'Tagbilaran, Bohol',},
];

const Item = ({ Lastname, Firstname, address }) => (
  <View>
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{Lastname}, {Firstname}</Text>
      <Text style={styles.listItemAdd}>{address}</Text>
     </View>
     <View></View>
  </View>
);

export default function App() {
    return (
      <SafeAreaView>
      <View style={styles.container}>
          <Text style={styles.text}>List of Guests</Text>
          <ScrollView>
              {DATA.map((item) => (
                  <Item key={item.id} Lastname={item.Lastname} Firstname={item.Firstname} address={item.address} />
              ))}
          </ScrollView>
      </View>
  </SafeAreaView>

    )
}

const styles = StyleSheet.create({
  container: {
        
    backgroundColor: 'white',
    alignItems: 'left',
    height: 600,
    marginTop:200,
    width:390,
    
},
text: {
    fontSize: 18,
    color: '#101010',
    marginTop: 5,
    fontWeight: '700',
    fontFamily:'Arial',
    marginBottom:10
},
listItem: {
    marginTop: 15,
    
    alignItems: 'left',
    backgroundColor: '#fff',
    width: '100%'
},
listItemText: {
    fontSize: 20,
    fontWeight:'bold',
    fontFamily:'Arial'
  
},
listItemAdd:{
    fontSize:15,
    fontFamily:'Arial'
}

});