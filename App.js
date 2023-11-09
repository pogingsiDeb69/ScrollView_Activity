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
    {id: '000-933',title: 'Antopina, Deborah Jane', address:'Tagbilaran, Bohol'},
    {id: '000-944',title: 'Amang, Jesse',address:'Corella, Bohol'},
    {id: '000-911',title: 'Amora, Kent Ivan', address:'Cortes, Bohol'},
    {id: '000-855',title: 'Angcahan, Ria Mae', address:'Catigbian, Bohol'},
    {id: '000-874',title: 'Ayuban, Katherine Mae', address:'Dauis, Bohol'},
    {id: '000-966',title: 'Banaga, Bernadeth', address:'Loboc, Bohol'},
    {id: '000-984',title: 'Bongcaras, Airen Mae', address:'Dauis, Bohol'},
    {id: '000-932',title: 'Bucia, James Warren', address:'Cortes, Bohol'},
    {id: '000-912',title: 'Bunol, Raymond', address:'Cortes, Bohol'},
    {id: '000-827',title: 'Carbonilla, Marlon', address:'Antiquera, Bohol'},
    {id: '000-754',title: 'Coquilla, Nathaniel Louise', address:'Antiquera, Bohol'},
    {id: '000-763',title: 'Dalen, Rhizabelle Jhaine', address:'Dauis, Bohol'},
    {id: '000-122',title: 'Dela Cruz, Mary Anne', address:'Balilihan, Bohol'},
    {id: '000-242',title: 'Dondoyano, Sherline Rose', address:'Balilihan, Bohol'} ,
    {id: '000-452',title: 'Escuadro, Nelbrey Jillian', address:'Lapaz, Cortes, Bohol'},
    {id: '000-356',title: 'Eusalan, Daisy Dianne', address:'Dauis, Bohol'},
    {id: '000-451',title: 'Felisilda, Arnold James', address:'Valencia, Bohol'},
    {id: '000-657',title: 'Fuentes, Loui', address:'Corella, Bohol'},
    {id: '000-951',title: 'Garcia, Rodel', address:'Hanopol, Bohol'},
    {id: '000-123',title: 'Jagunos, Joana', address:'Hanopol, Bohol'},
    {id: '000-659',title: 'Juntilla, Hershiel Jay', address:'Sevilla, Bohol'},
    {id: '000-969',title: 'Lahoy, Sherwen', address:'Cortes, Bohol'},
    {id: '000-741', title: 'Linog, Jesriel', address:'Sevilla, Bohol'},
    {id: '000-813',title: 'Luayon, Hazel Mae', address:'Corella, Bohol'},
    {id: '000-252',title: 'Madanguit, Rusel Nino', address:'Cortes, Bohol'},
    {id: '000-361',title: 'Magale, Pearly Diane', address:'Maribojoc, Bohol'}, 
    {id: '000-314',title: 'Magsino, Lovelyn', address:'Catigbian, Bohol'},
    {id: '000-543',title: 'Malanguis, Donilyn', address:'Corella, Bohol'},
    {id: '000-561',title: 'Maldora, Angelo', address:'Catigbian, Bohol'},
    {id: '000-394',title: 'Marabulas, Ailen Mae', address:'Catigbian, Bohol'},
    {id: '000-185',title: 'Maslog, Cloyd', address:'Tagbilaran, Bohol'},
    {id: '000-923',title: 'Mirabite, Mic Roland', address:'Maribojoc, Bohol'},
    {id: '000-713',title: 'Oring, Jea Norene', address:'Boctol, Bohol'},
    {id: '000-847',title: 'Paguican, Nicole James', address:'Jagna, Bohol'},
    {id: '000-333',title: 'Pajota, Arnel', address:'Tagbilaran, Bohol'},
    {id: '000-669',title: 'Pilipino, Jesrel',address:'Tagbilaran, Bohol'},
    {id: '000-888',title: 'Sarabia, Earl Mike',address:'Tagbilaran, Bohol'},
    {id: '000-445',title: 'Saraga, Sheilo',address:'Catigbian, Bohol'},
    {id: '000-657',title: 'Tabanyag, John',address:'Cortes, Bohol'},
    {id: '000-111', title: 'Tadlas, Kenneth',address:'Tagbilaran, Bohol'},
    {id: '000-833',title: 'Tahil, Adriane Jane',address:'Hanopol, Bohol' },
    {id: '000-555',title: 'Tinaja, Ma. Luisa', address:'Tagbilaran, Bohol'},
    {id: '000-999',title: 'Valiente Melrose', address:'Tagbilaran, Bohol'},
];

const Item = ({ title, address }) => (
  <View style={styles.listItem}>
      <Text style={styles.listItemText}>{title}</Text>
      <Text style={styles.listItemAdd}>{address}</Text>
  </View>
);

export default function App() {
   
      return (
        <SafeAreaView style={{flex:1}}>

          
            <View style={styles.container}>
                <Text style={styles.text}>LIST OF GUESTS</Text>
                <ScrollView>
                    {DATA.map((item) => (
                        <Item key={item.id} title={item.title} address={item.address}/>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'white',
        alignItems: 'left',
        height: 600,
        marginTop:200,
        
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