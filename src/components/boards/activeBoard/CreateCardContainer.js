import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux'
import { v4 } from 'node-uuid';
import submitNewCard from './../../../Actions/SubmitNewCard';
import BoardTitleInput from './../boardCreation/BoardTitleInput';

class CreateCardContainer extends Component {

    submit = values => {
        console.log(values)
        this.props.submitNewCard(values)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
        <form onSubmit={handleSubmit(this.submit)}>
            <label>
                <Field
                    type="text"
                    component={BoardTitleInput}
                    name={`cardName-${v4()}`}
                />
            </label>
        </form>
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

export default reduxForm({
    validate,
    form: 'cardName',
    onSubmitSuccess: afterSubmit,
})(connect(null, { submitNewCard })(CreateCardContainer));
