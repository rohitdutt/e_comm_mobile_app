import React from "react";
import {FlatList, View} from "react-native";
import Category from "./Category";

const Categories = () => {
    const categories = [
        {id: 1, categoryName: 'Electronics'},
        {id: 2, categoryName: 'Fashion'},
        {id: 3, categoryName: 'HouseHolds'},
        {id: 4, categoryName: 'Trending'},
        {id: 5, categoryName: 'For you'},
        {id: 6, categoryName: 'Best Seller'},
        {id: 7, categoryName: 'Offer Zone'}
    ]
    const renderItem = ({ item }) => (
        <Category categoryId={item.id} categoryName={item.categoryName} />
    );

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={category => category.id.toString()}
            />
        </View>
    );
};

export default Categories;
