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
        return "random title for now"
    }

    render() {

        return (
            <div>
                <ActiveBoardTitle>
                    {this.getTitle()}
                </ActiveBoardTitle>
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
