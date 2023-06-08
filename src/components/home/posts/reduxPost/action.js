


export const addData = (text, id, posted_on) => {
    return{
  type: 'ADD_DATA',
  payload: {
    text,
    id,
    posted_on,
  },
}
};
export const showData=(data)=>{
  return {
    type: 'SHOW_DATA',
    payload:data
  }
}
export const fetchUpdatedData = (data) => {
  return {
    type: 'FETCH_UPDATED_DATA',
    payload:data
  };
};