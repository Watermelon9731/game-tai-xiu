import React, { Component } from 'react'
import { connect } from 'react-redux'
import { rollAction } from '../redux/action/DiceGameAction'
import { ROLL } from '../redux/type/DiceGameType'
import Dice from './Dice'
import Result from './Result'

class DiceGame extends Component {
    render() {
        return (
            <div className='dice-game'>
                <div className="layer text-center">
                    <h1 className='text-center p-5 text-uppercase display-4'>game đổ xúc xắc</h1>
                    <Dice />
                    <Result />
                    <button className="btn btn-success" onClick={() => {
                        this.props.dispatch(rollAction());
                    }}>
                        <div className=" p-2 display-4">
                            Bắt đầu
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        diceGameReducer: rootReducer.diceGameReducer
    }
}

export default connect(mapStateToProps)(DiceGame)