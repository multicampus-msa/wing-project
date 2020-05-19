import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

function SupportPaymentResult({ history }) {
  const { location } = history;
  const { search } = location;
  const query = queryString.parse(search);
  
  const { merchant_uid, error_msg, buyer_name } = query;
  const isSuccessed = getIsSuccessed();
  function getIsSuccessed() {
    const { success, imp_success } = query;
    if (typeof imp_success === 'string') return imp_success === 'true';
    if (typeof imp_success === 'boolean') return imp_success === true;
    if (typeof success === 'string') return success === 'true';
    if (typeof success === 'boolean') return success === true;
  }

  const resultType = isSuccessed ? '성공' : '실패';
  return (
      <div>
        <p>{`결제에 ${resultType}하였습니다`}</p>
        <ul>
          <li>
            <span>아티스트</span>
            <span>{merchant_uid}</span>
          </li>
          {isSuccessed  ? (
            <li>
              <span>후원자 이름</span>
              <span>{buyer_name}</span>
            </li>
          ) : (
            <li>
              <span>에러 메시지</span>
              <span>{error_msg}</span>
            </li>
          )}
        </ul>
        <Button variant="contained" onClick={() => history.push('/support')}>
          돌아가기
        </Button>
      </div>
  );
}

export default withRouter(SupportPaymentResult);
