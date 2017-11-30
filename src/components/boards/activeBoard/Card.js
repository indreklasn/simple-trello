import React, { Component } from 'react';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types'
// import HTML5Backend from 'react-dnd-html5-backend';
import { ItemTypes } from './../../../Utils/Constants';

const CardWrapper = styled.div`
    margin: 10px 0;
    padding: 14px 7px;
    background: rgb(241, 241, 241);
    border-radius: 4.5px;
`

const CardTitle = styled.h3`
    font-weight: bold;
    font-size: 19px;
    margin: 0;
`

const cardSource = {
    beginDrag(props) {
        return {
            title: props.title
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.cardSource(),
        isDragging: monitor.isDraggin(),
    }
}

const propTypes = {
    title: PropTypes.string.isRequired,
    connectDragSource: PropTypes.bool.isRequuired,
    connectDragSource: PropTypes.func.isRequired,
}


class Card extends Component {
    
    render() {
        const { isDragging, connectDragSource, text, title } = this.props;

        return connectDragSource(
        <CardWrapper style={{ opacity: isDragging ? 0.5 : 1 }} >
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
        )
    }
}

Card.propTypes = propTypes;


export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
