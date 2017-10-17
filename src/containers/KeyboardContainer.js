import { connect } from 'react-redux'
import Keyboard from '../components/Keyboard'

const mapStateToProps = (state) => {
  return {}
}

// アクション情報を渡す
const mapDispatchToProps = dispatch => {
  return {
    onChange: (value) => {
      dispatch({type: 'CONSOLE', text: value})
    },
  }
}

// Component(React)へPropsとしてReduxをバインド
const KeyboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Keyboard)

export default KeyboardContainer