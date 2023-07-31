import React, { useReducer } from "react";

function reducer(state, action) {
  // state : 현재 가리키고 있는 모든 상태(여기서는 value) , action : 업데이트 하기위해 필요한 정보가 담긴것 여기서는 { type : ~~}
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // state : 현재 가리키고 있는 모든 상태(여기서는 value)
  // dispatch : action을 발생시키는 함수
  // useReducer 첫번째 파라미터 : 실행될 reducer 함수, 두번째 파라미터 : 기본값
  return (
    <div>
      <p>현재 카운터 값은 {state.value} 입니다.</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
