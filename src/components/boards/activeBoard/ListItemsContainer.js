import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapValues from 'lodash/mapValues';
import ListItem, { ListItemsWrapper } from './ListItem';


class ListItemsContainer extends Component {

    renderListItems = () => {
        const { activeBoardData } = this.props

        const mappedList = mapValues(activeBoardData.listItems, list => list.name);
        const mappedKeys = Object.keys(mappedList)

        return mappedKeys.map((id, i) => {
            return <ListItem id={id} key={i} name={mappedList[id]} />
        })

    }

    render() {

        return (
            <ListItemsWrapper>
                {this.renderListItems()}
            </ListItemsWrapper>
        )
    }
}

function mapStateToProps({activeBoardData}) {
    return { activeBoardData }
}

export default connect(mapStateToProps)(ListItemsContainer);
