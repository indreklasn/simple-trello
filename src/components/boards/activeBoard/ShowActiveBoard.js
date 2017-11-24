import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import selectActiveBoard from './../../../Actions/SelectActiveBoard';
import ActiveBoardTitle from './ActiveBoardTitle';
import ListWrapper from './ListWrapper';
import CreateNewList from './CreateNewList';

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

        console.log(this.props.activeBoard);
    }

    getTitle = () => {
        return this.props.activeBoard.title;
    }

    render() {

        const { activeBoard } = this.props;
        if (activeBoard.isFetching) {
            return (
                <div>loading...</div>
            )
        }

        return (
            <div>
                <ActiveBoardTitle>
                    {this.getTitle()}
                </ActiveBoardTitle>
                <ListWrapper>
                    <CreateNewList />
                </ListWrapper>


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
