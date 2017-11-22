import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CreateBoard from './CreateBoard';
import ActiveCreateBoard from './ActiveCreateBoard';


class CreateBoardContainer extends Component {

    static propTypes = {
        newBoard: PropTypes.object
    }

    render() {

        const { newBoard } = this.props;

        return (
            <div>
                { newBoard.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard /> }
            </div>
        )
    }
}


function mapStateToProps({ newBoard }) {
    return {
        newBoard
    }
}

export default connect(mapStateToProps)(CreateBoardContainer)
