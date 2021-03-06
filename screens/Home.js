import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const Home = () =>{
    return(
        <View>
            <View style={styles.searchBar}>
                <SearchBar
                    round
                    searchIcon={
                        {
                            size: 20
                        }
                    }
                    placeholder={"Seach Here ..."}
                />
            </View>
            <Text>Home Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    searchBar:{
        height:10
    }
})

export default Home;
