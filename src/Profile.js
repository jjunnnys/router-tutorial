import React from 'react';

const data = {
  // key가 url로 전달 받는 username과 똑같아야 함
  ppby: {
    name: '서민준',
    description: '페퍼보이',
  },
  chg: {
    name: '오혜윤',
    description: '칠리걸',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params; // 라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의 params 값을 참조
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
