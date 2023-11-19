const UPDATE_LIST = "list/UPDATE_LIST";
const DELET_LIST = "list/DELET_LIST";
const EDIT_LIST = "list/EDIT_LIST";

export const updateList = (payload) => {
  return {
    type: UPDATE_LIST,
    payload,
  };
};

export const deletList = (payload) => {
  return {
    type: DELET_LIST,
    payload,
  };
};

export const deitList = (payload) => {
  return {
    type: EDIT_LIST,
    payload,
  };
};

const initialState = {
  list: [
    {
      id: "1",
      nickname: "대빵",
      context: "서울어디가 맛집일까?",
      region: "서울",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "2",
      nickname: "대빵",
      context: "경기어디가 맛집일까?",
      region: "경기",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "3",
      nickname: "대빵",
      context: "인천어디가 맛집일까?",
      region: "인천",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "4",
      nickname: "대빵",
      context: "대구어디가 맛집일까?",
      region: "대구",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "5",
      nickname: "대빵",
      context: "부산어디가 맛집일까?",
      region: "부산",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "6",
      nickname: "대빵",
      context: "제주어디가 맛집일까?",
      region: "제주",
      time: "2023.11.15 AM11:44",
    },
  ],
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return { ...state, list: [...state.list, action.payload] };
    case DELET_LIST:
      return {
        ...state,
        list: state.list.filter((element) => element.id !== action.payload),
      };
    case EDIT_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default list;
