import React from "react";
import {Text,StyleSheet, TouchableOpacity, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Category = ({categoryId,categoryName}) =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={style.category} onPress={()=>{
                navigation.navigate("sub-category",{categoryId});
            }}
        >
            <Text>
                {
                    categoryName
                }
            </Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    category:{
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
    }
});

export default Category;
