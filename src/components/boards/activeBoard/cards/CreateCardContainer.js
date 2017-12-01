import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import submitNewCard from '~Actions/SubmitNewCard';
import BoardTitleInput from './../../boardCreation/BoardTitleInput';
import Card from './Card';
import uniqueId from 'lodash/uniqueId';
import archiveCard from '~Actions/ArchiveCard';

class CreateCardContainer extends Component {

    submit = values => {
        const { listId } = this.props;
        let cardName = `cardName_${listId}`
        this.props.submitNewCard(values[cardName], uniqueId('cardItem_'), listId)
    }

    renderCards = () => {
        const { activeBoardData, listId } = this.props;
        return activeBoardData.listItems[listId].cards.map((card, i) => {
            return (
                <Card
                    key={i}
                    title={card.name}
                    listId={card.listId}
                    togglePost={this.togglePost(card.cardId, card.listId)}
                />
            )
        })
    }

    togglePost = (cardId, listId) => {
        console.log(cardId, listId);
        this.props.archiveCard(cardId, listId)
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
                {this.renderCards()}
            </div>
        )
    }
}

const validate = (values, props) => {
    const errors = {};
    const { listId } = props;
    let cardName = `cardName_${listId}`

    if (!values[cardName]) {
        errors[cardName] = 'oops, give me name';
    }

    return errors;
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('card'));
}

function mapStateToProps({ activeBoardData }) {
    return { activeBoardData }
}

export default reduxForm({
    validate,
    form: 'card',
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps, { submitNewCard, archiveCard })(CreateCardContainer));
