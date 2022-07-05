import React, { Component } from 'react'
// Connect redux
import { connect } from 'react-redux'
// Binding
import {PICK} from '../redux/type/DiceGameType'
import { pickAction } from '../redux/action/DiceGameAction'

class Dice extends Component {
    diceRender = () => {
        return this.props.diceArray.map((dice,index) => {
            return (
                <img src={dice.imgSrc} alt={index} key={index} className='w-25' />
            )
        })
    }

    diceResult = () => {
        let total = this.props.diceArray.reduce((dice,diceScore) => {
            return (
                dice + diceScore.score
            )
        },0)

        let result = total > 11 ? `${total} điểm - TÀI` : `${total} điểm - XỈU`;

        return (
            <h2 className='my-5 text-secondary'>{result}</h2>
        )
    }

    render() {
        return (
            <div className='row text-center'>
                <div className="col-5">
                    <button className="btn btn-primary" onClick={() => {
                       this.props.dispatch(pickAction(true));
                    }}>
                        <div className='display-4 p-5'>
                            TÀI
                        </div>
                    </button>
                </div>
                <div className="col-2">
                    {this.diceRender()}
                    {this.diceResult()}
                </div>
                <div className="col-5">
                    <button className="btn btn-primary" onClick={() => {
                        this.props.dispatch(pickAction(false));
                    }}>
                        <div className='display-4 p-5'>
                            XỈU
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        diceArray: rootReducer.diceGameReducer.diceArray
    }
}

export default connect(mapStateToProps)(Dice)
