import { connect } from 'react-redux';
import KeyboardsArea from '../components/KeyboardsArea'

const mapStateToProps = (state) => {
  return {
    keyboards : state.keyboards
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
const KeyboardsAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyboardsArea)

export default KeyboardsAreaContainer