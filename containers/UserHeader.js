import { connect } from 'react-redux';

import UserHeader from './../components/UserHeader';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, null)(UserHeader);