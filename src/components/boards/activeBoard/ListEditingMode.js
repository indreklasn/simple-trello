import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Wrapper } from './CreateNewList';
import DisableListEditMode from './DisableListEditMode';
import disableListEditMode from './../../../Actions/DisableListEditMode';
import { reduxForm, Field, reset } from 'redux-form';
import BoardTitleInput from './../boardCreation/BoardTitleInput';

const ListEditingModeWrapper = Wrapper.extend`
    padding: 15px 10px;
    height: 100px;
`
class ListEditingMode extends Component {

    render() {
        const { disableListEditMode, handleSubmit } = this.props;
        return (
            <ListEditingModeWrapper>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="listItem"
                        component={BoardTitleInput}
                        type="text"
                        placeholder="add a list"
                    />
                </form>
                <DisableListEditMode disableList={disableListEditMode} />
            </ListEditingModeWrapper>
        )
    }
}

function mapStateToProps({activeBoard}) {
    return { activeBoard }
}


function validate(values) {
    let errors = {};

    if (!values.listItem) {
        errors.listItem = 'give me a name!'
    }

    return errors;
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('listItem'));
}


export default reduxForm({
    validate,
    form: 'listItem',
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps, { disableListEditMode })(ListEditingMode));
