import { connect } from 'react-redux'
import Keyboard from '../components/Keyboard'

const mapStateToProps = (state) => {
  return {}
}

// アクション情報を渡す
const mapDispatchToProps = dispatch => {
  return {
    onChange: (text,name,data) => {
      dispatch({type: 'CONSOLE', text: `text:${text} keyboardNum:${name} keyNum:${data}`})
    },
  }
}

// Component(React)へPropsとしてReduxをバインド
const KeyboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Keyboard)

export default KeyboardContainer