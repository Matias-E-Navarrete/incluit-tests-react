import React from 'react'
import {createStore} from 'redux'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history'
import initialState from '../../store/initialState'
import reducer from '../../store/reducers'


const ProviderMock = props => {
    const history = createBrowserHistory()
    const state = props.state ? props.state : initialState
    const myStore = createStore(reducer, state)

    return (
        <Provider store={myStore}>
            <Router history={history}>
                {props.children}
            </Router>
        </Provider>
    )
}


export default ProviderMock