

const initialState={
  data: [
    { text: "A great Post", id: 0, posted_on: "Fri Nov 27 2020" },
    {
      text: "Hi, I am new to this platform",
      id: 1,
      posted_on: "Mon Nov 23 2020",
    },
    {
      text: "Hi, I am new to this platform",
      id: 2,
      posted_on: "Thu Nov 26 2020",
    },
    { text: "A great Post", id: 3, posted_on: "Sun Nov 22 2020" },
    { text: "Good Morning", id: 4, posted_on: "Fri Nov 27 2020" },
    { text: "Good evening everyone!", id: 5, posted_on: "Sun Nov 22 2020" },
    { text: "Good evening everyone!", id: 6, posted_on: "Sat Nov 28 2020" },
    { text: "A great Post", id: 7, posted_on: "Sun Nov 22 2020" },
    {
      text: "Hi, I am new to this platform",
      id: 8,
      posted_on: "Thu Nov 26 2020",
    },
    { text: "A nice post", id: 9, posted_on: "Mon Nov 23 2020" },
    { text: "A great Post", id: 10, posted_on: "Sat Nov 28 2020" },
    { text: "A great Post", id: 11, posted_on: "Mon Nov 23 2020" },
    { text: "Good Morning", id: 12, posted_on: "Wed Nov 25 2020" },
    { text: "A great Post", id: 13, posted_on: "Thu Nov 26 2020" },
    { text: "A great Post", id: 14, posted_on: "Fri Nov 27 2020" },
    { text: "Just a post", id: 15, posted_on: "Mon Nov 23 2020" },
    { text: "Good Morning", id: 16, posted_on: "Tue Nov 24 2020" },
    { text: "Hey, Its just a post", id: 17, posted_on: "Sat Nov 28 2020" },
    { text: "Just a post", id: 18, posted_on: "Thu Nov 26 2020" },
    { text: "A great Post", id: 19, posted_on: "Sat Nov 28 2020" },
    { text: "A great Post", id: 20, posted_on: "Sun Nov 22 2020" },
    { text: "A great Post", id: 21, posted_on: "Tue Nov 24 2020" },
    { text: "A great Post", id: 22, posted_on: "Mon Nov 23 2020" },
    {
      text: "Hi, I am new to this platform",
      id: 23,
      posted_on: "Sun Nov 22 2020",
    },
  ],
  filteredData: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DATA':
        return {
          ...state,
          data: [
            {
              text: action.payload.text,
              id: action.payload.id,
              posted_on: action.payload.posted_on,
            },
            ...state.data,
          ],
        };
        case 'SHOW_DATA':
          return{
            ...state,
            filteredData: action.payload
          };
          case 'FETCH_UPDATED_DATA':
            return {
              ...state,
              data: action.payload,
            };
      default:
        return state;
    }
  };
export default reducer