import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapValues from 'lodash/mapValues';
import ListItem, { ListItemsWrapper } from './ListItem';


class ListItemsContainer extends Component {

    renderListItems = () => {
        const { activeBoardData } = this.props;
        const mappedList = mapValues(activeBoardData.listItem, list => list.name);
        const mappedValues = Object.values(mappedList);

        return mappedValues.map((item, i) => <ListItem key={i} name={item} />)

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
