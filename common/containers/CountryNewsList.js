import { connect } from 'react-redux'
import NewsContainer from '../components/NewsContainer'

const mapStateToProps = (state) => ({
  news: state.news
})

export default connect(
  mapStateToProps,
) (NewsContainer)