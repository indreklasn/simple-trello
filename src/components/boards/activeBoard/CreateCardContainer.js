import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import submitNewCard from './../../../Actions/SubmitNewCard';
import BoardTitleInput from './../boardCreation/BoardTitleInput';
import Card from './Card';
import uniqueId from 'lodash/uniqueId';


class CreateCardContainer extends Component {

    submit = values => {
        const { listId } = this.props;
        let cardName = `cardName_${listId}`
        this.props.submitNewCard(values[cardName], uniqueId('cardItem_'), this.props.listId)
    }

    renderCards = () => {
        const { activeBoardData, listId } = this.props;
        return activeBoardData.listItems[listId].cards.map((card, i) => {
            return <Card key={i} title={card.name} />
        })
    }

    render() {
        const { handleSubmit, listId } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.submit)}>
                    <label>
                        <Field
                            type="text"
                            component={BoardTitleInput}
                            name={`cardName_${listId}`}
                        />
                    </label>
                </form>
                <DragDropContext backend={HTML5Backend}>
                    {this.renderCards()}
                </DragDropContext>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.cardName) {
        errors.cardName = 'oops!';
    }

    return errors;
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('cardName'));
}

function mapStateToProps({activeBoardData}) {
    return { activeBoardData }
}

export default reduxForm({
    validate,
    form: 'cardName',
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps, { submitNewCard })(CreateCardContainer));
