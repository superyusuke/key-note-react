import { connect } from 'react-redux'
import Keyboard from '../components/Keyboard'
import {updateText} from '../actions/TodoAction'

const mapStateToProps = (state) => {
  return {}
}

// アクション情報を渡す
const mapDispatchToProps = dispatch => {
  return {
    onChange: (payload) => {
      dispatch(updateText(payload))
    },
  }
}

// Component(React)へPropsとして Redux をバインド
const KeyboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Keyboard)

export default KeyboardContainer