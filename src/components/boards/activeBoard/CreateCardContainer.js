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
        this.props.submitNewCard(values)
    }

    renderCards = () => {
        const { activeBoardData } = this.props;
        // return activeBoardData.cardItems.map((card, i) => {
        //     return <Card key={i} title={card.cardName} />
        // })
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.submit)}>
                    <label>
                        <Field
                            type="text"
                            component={BoardTitleInput}
                            name={uniqueId("cardName_")}
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
