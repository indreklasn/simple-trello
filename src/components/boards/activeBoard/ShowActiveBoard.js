import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import selectActiveBoard from './../../../Actions/SelectActiveBoard';
import ActiveBoardTitle from './ActiveBoardTitle';

class ShowActiveBoard extends Component {

    static propTypes = {
        selectActiveBoard: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const {
            match,
            selectActiveBoard,
        } = this.props;
        selectActiveBoard(match.params.id);
    }

    componentWillUnmount() {
        localStorage.removeItem('activeBoard');
    }

    getTitle = () => {

        if (localStorage.getItem("activeBoard") !== null) {
            let activeBoard = JSON.parse(localStorage.getItem("activeBoard"));
            return activeBoard.title;
        }

        return this.props.activeBoard.title;
    }

    render() {

        return (
            <div>
                <ActiveBoardTitle>{this.getTitle()}</ActiveBoardTitle>
            </div>
        )
    }
}

function mapStateToProps({ activeBoard }) {
    return {
        activeBoard
    }
}

export default connect(mapStateToProps, { selectActiveBoard })(ShowActiveBoard);
