import { inject, observer } from "mobx-react/native";
import { Navigation } from 'react-native-navigation';
import React, { Component } from 'react';
import { Button, Text, View, SafeAreaView } from 'react-native';

class SubScreen extends Component {
    render() {
        const { componentId } = this.props;
        const { increaseTodoCount, todoList } = this.props.store;
        const todo = todoList.get(0);

        return (
            <SafeAreaView>
                <View>
                    <Text>{`${todo.count}`}</Text>
                    <Button title="Pop" onPress={() => Navigation.pop(componentId)} />
                    <Button title="increaseTodoCount" onPress={() => increaseTodoCount(0)} />
                </View>
            </SafeAreaView>
        );
    }
}

export default inject((stores) => ({
    store: stores.store
}))(observer(SubScreen));
