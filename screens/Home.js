import React, {useState} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {SearchBar,ThemeProvider} from 'react-native-elements';
import Categories from "../components/Categories";

const Home = () =>{

    const [search , setSearch] = useState("");

    const theme={
        SearchBar:{
            inputContainerStyle:{
                backgroundColor: 'red'
            }
        },
    };

    return(
        <View>
            <SearchBar
                round
                searchIcon={
                    {
                        size: 20
                    }
                }
                placeholder={"Search Here ..."}
                onChangeText={e=>setSearch(e)}
                value={search}
                lightTheme={true}
            />
            <Categories/>
        </View>
    )
};

const styles = StyleSheet.create({
    searchBar:{
        height:50,
        backgroundColor: 'red'
    }
})

export default Home;
