import { connect } from 'react-redux'
import Key from '../components/Key'
import {updateText} from '../actions/TodoAction'

const mapStateToProps = (state) => {
  return {
    state
  }
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
const KeyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Key)

export default KeyContainer