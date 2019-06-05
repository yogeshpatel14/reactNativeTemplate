
import React, { Component } from 'react';
import AppNavigator from './stackNavigator/AppNavigator';
import { Provider } from 'react-redux';
import { store } from '../reduxStore/createStore';

class RootApp extends Component {
    render() {
        return (
             <Provider store={store}>
                <AppNavigator />
            </Provider>
        )
    }
}

export default RootApp;