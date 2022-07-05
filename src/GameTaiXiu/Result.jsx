import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        return (
            <div className='row text-center mt-5'>
                <div className="col-12 p-2">
                    <h2>Bạn đã chọn: <span className='text-danger'>{this.props.diceGameReducer.selection ? 'TÀI' : 'XỈU'}</span></h2>
                </div>
                <div className="col-12 p-2">
                    <h3>Số lần thắng: <span className='text-success'>{this.props.diceGameReducer.winingCount}</span></h3>
                </div>
                <div className="col-12 p-2">
                    <h3>Tổng số lần chơi: <span className='text-warning'>{this.props.diceGameReducer.playCount}</span></h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        diceGameReducer: rootReducer.diceGameReducer,
    }
}

export default connect(mapStateToProps)(Result)
