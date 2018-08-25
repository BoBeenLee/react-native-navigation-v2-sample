import { Provider } from "mobx-react/native";
import React, { Component } from "react";

const withStore = (
  TargetComponent,
  store
) => {
  return class WithStore extends Component {
    render() {
      return (
        <Provider store={store}>
          <TargetComponent {...this.props} />
        </Provider>
      );
    }
  };
};

export default withStore;
