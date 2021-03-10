import React, {useEffect, useState} from "react";
import {FlatList, Text, View} from "react-native";
import Category from "../Category";

const SubCategories = ({route})=>{

    const [subCategoryAfterFilter , setSubCategoryAfterFilter] = useState([]);

    const subCategory = [
        {id:1 , categoryId: 1 , subCategoryName: 'Mobile'},
        {id:2 , categoryId: 1 , subCategoryName: 'Earphones'},
        {id:3 , categoryId: 1 , subCategoryName: 'Laptops'},
        {id:4 , categoryId: 1 , subCategoryName: 'Television'},
        {id:5 , categoryId: 2 , subCategoryName: 'Shirts'},
        {id:6 , categoryId: 2 , subCategoryName: 'T-Shirts'},
        {id:7 , categoryId: 2 , subCategoryName: 'Jeans'},
        {id:8 , categoryId: 2 , subCategoryName: 'Footwear'},
        {id:9 , categoryId: 3 , subCategoryName: 'Kitchen'},
        {id:10 , categoryId: 3 , subCategoryName: 'Furniture'},
        {id:11 , categoryId: 3 , subCategoryName: 'Home Decor'},
        {id:12 , categoryId: 3 , subCategoryName: 'Furnishing'},
    ];

    const {categoryId} = route.params;

    useEffect(()=>{
        let res = subCategory.filter(subCategoryFilter => subCategoryFilter.categoryId === categoryId);
        setSubCategoryAfterFilter(res);
    },[])

    const renderItem = ({ item }) => (
        <Category categoryId={item.id} categoryName={item.subCategoryName} />
    );

    let toRender;
    if(subCategoryAfterFilter.length === 0){
       toRender =(
            <Text>We don't have anything for you at this moment !</Text>
       )
    }else{
        toRender = (
            <FlatList
                data={subCategoryAfterFilter}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        )
    }

    return(
        <View>
            {
                toRender
            }
        </View>
    );
};

export default SubCategories;
