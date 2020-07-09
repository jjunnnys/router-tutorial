import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)} // json 파일 들여쓰기 2칸
        rows={7}
        readOnly
      ></textarea>
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly
        /*
            출력된 결과를 보면 지금은 prams가 비어있음,
            withRouter를 사용하면 현재 자신을 보여 주고 있는 라우트 컴포넌트(현재는 Profiles)를 기준으로 match가 전달
            Profiles를 위한 라우트를 설정할 때는 path="/profiles"라고만 입력했으므로 username 파라미터를 읽어 오지 못하는 상태임
            -> Profiles에 지우고 Profile 컴포넌트에 넣으면 username이 보일 것임
        */
      ></textarea>
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
