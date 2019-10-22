import React from 'react';
import { connect } from 'react-redux';

import { testAction } from '../../store/actions';

const TestPage = ({ testAction, ...rest }) => {
  const handleClick = () => {
    testAction();
  };

  return <div onClick={() => handleClick()}>TestPage</div>;
};

export default connect(
  state => ({
    ...state.test.data
  }),
  { testAction }
)(TestPage);
