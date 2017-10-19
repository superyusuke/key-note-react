import { connect } from 'react-redux';
import KeyboardsArea from '../components/KeyboardsArea'

const mapStateToProps = (state) => {
  return {
    keyboards : state.keyboards,
    title : state.title
  }
}

// アクション情報を渡す
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch({type: 'UPDATE_TITLE'})
    }
  }
}

// Component(React)へPropsとしてReduxをバインド
const KeyboardsAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyboardsArea)

export default KeyboardsAreaContainer