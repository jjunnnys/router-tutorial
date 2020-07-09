import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/ppby">ppby</Link>
        </li>
        <li>
          <Link to="/profiles/chg">chg</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact // 값을 생략하면 자동으로 true 설정
        render={() => <div>사용자를 선택해 주세요.</div>} // 별도로 컴포넌트를 따로 만들기 애매할 때 render를 사용 (JSX를 넣어 줌), 컴포넌트에 props를 별도로 넣어 주고 싶을 때도 사용
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
