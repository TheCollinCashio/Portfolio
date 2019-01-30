import React from 'react'
import Name from './components/Name'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Name name="Collin"/>
        )
    }
}