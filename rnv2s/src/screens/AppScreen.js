import { inject, observer, Observer } from "mobx-react/native";
import { Navigation } from 'react-native-navigation';
import React, { Component } from 'react';
import { Button, Text, View, SafeAreaView, FlatList } from 'react-native';

class AppScreen extends Component {
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
        this.state = {
            text: 'nothing yet'
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidAppear() {
        console.log("componentDidAppear");
    }

    componentDidDisappear() {
        console.log('componentDidDisappear');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const { componentId } = this.props;
        const { aCount, todoList, addTodo } = this.props.store;

        return (
            <SafeAreaView>
                <View>
                    <Text>{`Lifecycle Screen ${aCount}`}</Text>
                    <Button title="push" onPress={() => Navigation.push(componentId, {
                        component: {
                            name: "app.SubScreen",
                        }
                    })} />
                    <Button title="addTodo" onPress={addTodo} />
                    <FlatList
                        data={todoList.peek()}
                        renderItem={this.renderCountItem}
                    />
                </View>
            </SafeAreaView>
        );
    }

    // https://github.com/mobxjs/mobx/issues/1142#issuecomment-323161298
    renderCountItem = ({ item }) => {
        return (
            <Observer>{() => <View>
                <Text>{item.count}</Text>
            </View>}
            </Observer>
        )
    }
}

export default inject((stores) => ({
    store: stores.store
}))(observer(AppScreen));
