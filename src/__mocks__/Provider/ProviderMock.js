import React from 'react'
import {createStore} from 'redux'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history'
import initialState from '../../store/initialState'
import reducer from '../../store/reducers'

const myStore = createStore(reducer, initialState)
const history = createBrowserHistory()

const ProviderMock = props => (
    <Provider store={myStore}>
        <Router history={history}>
            {props.children}
        </Router>
    </Provider>
)

export default ProviderMock