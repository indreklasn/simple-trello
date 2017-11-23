import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import selectActiveBoard from './../../Actions/SelectActiveBoard';

class ShowActiveBoard extends Component {
    static propTypes = {
        selectActiveBoard: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const { match, selectActiveBoard } = this.props;
        // console.log(match.params.id);
        selectActiveBoard(match.params.id);
    }

    render() {
        return (
            <div>
                <h1>showing singular board</h1>
            </div>
        )
    }
}

export default connect(null, { selectActiveBoard })(ShowActiveBoard);
