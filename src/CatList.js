// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {
    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }

    render() {
        debugger
        return (
            <div><h2>List here</h2>
                {this.listCats()}
            </div>
        )
    }
}
