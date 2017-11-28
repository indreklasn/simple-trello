import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux'
import submitNewCard from './../../../Actions/SubmitNewCard';
import BoardTitleInput from './../boardCreation/BoardTitleInput';
import Card from './Card';
import uniqueId from 'lodash/uniqueId';

class CreateCardContainer extends Component {

    submit = values => {
        console.log(values)
        this.props.submitNewCard(values.cardName, uniqueId('cardItem_'), this.props.listId)
    }

    renderCards = () => {
        const { activeBoardData, listId } = this.props;
        return activeBoardData.listItems[listId].cards.map((card, i) => {
            console
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
                            name="cardName"
                        />
                    </label>
                </form>
                {this.renderCards()}
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
