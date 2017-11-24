import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { Wrapper } from './CreateNewList';
import DisableListEditMode from './DisableListEditMode';
import disableListEditMode from './../../../Actions/DisableListEditMode';
import { reduxForm, Field } from 'redux-form';
import BoardTitleInput from './../boardCreation/BoardTitleInput';

class ListEditingMode extends Component {
    render() {
        const { disableListEditMode, handleSubmit } = this.props;
        return (
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="listItem"
                        component={BoardTitleInput}
                        type="text"
                        placeholder="add a list"
                    />
                </form>
                <DisableListEditMode disableList={disableListEditMode} />
            </Wrapper>
        )
    }
}

function mapStateToProps({activeBoard}) {
    return { activeBoard }
}


function validate() {
    let errors;

    return errors;
}


export default reduxForm({
    validate,
    form: 'listItem',
})(connect(mapStateToProps, { disableListEditMode })(ListEditingMode));
