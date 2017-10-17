import { connect } from 'react-redux'
import Keyboard from '../components/Keyboard'

const mapStateToProps = (state) => {
  return {}
}

// アクション情報を渡す
const mapDispatchToProps = dispatch => {
  return {
    onChange: (text, payload) => {
      dispatch({
        type: 'CONSOLE',
        text: text,
        keyboardNum: payload.keyboardIndex,
        keyNum: payload.keyNum,
      })
    },
  }
}

// Component(React)へPropsとしてReduxをバインド
const KeyboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Keyboard)

export default KeyboardContainer