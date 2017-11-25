import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem, { ListItemsWrapper } from './ListItem';

class ListItemsContainer extends Component {

    renderListItems = () => {
        const { listItems } = this.props;
        return listItems.map((item, i) => {
            return <ListItem key={i} name={item.name} />
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

function mapStateToProps({listItems}) {
    return { listItems }
}

export default connect(mapStateToProps)(ListItemsContainer);
