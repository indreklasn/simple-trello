import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem, { ListItemsWrapper } from './ListItem';

class ListItemsContainer extends Component {

    renderListItems = () => {
        const { activeBoardData } = this.props;
        return activeBoardData.listItems.map(item => {
            return <ListItem key={item.id} name={item.name} />
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
