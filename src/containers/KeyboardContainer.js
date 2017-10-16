import { connect } from 'react-redux';
import Keyboard from '../components/Keyboard'

const mapStateToProps = (state) => {
  return {
    keys : state.keys
  }
}

// アクション情報を渡す
const mapDispatchToProps = dispatch => {
  return {
    destoryTodo: (todoId) => {
      dispatch(todoId)
    }
  }
}

// Component(React)へPropsとしてReduxをバインド
const KeyboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Keyboard)

export default KeyboardContainer