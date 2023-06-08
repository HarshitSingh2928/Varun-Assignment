export const addDay=(id)=>{
    return{
        type:'ADD_DAY',
        payload:id
    }
};
export const delDay=(postedOnDay)=>{
    const date = new Date(postedOnDay);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return{
        type:'DEL_DAY',
        payload:daysOfWeek[dayIndex]
    }
}
export const settask=(cardData)=>{
    return {
        type:'SET_TASK',
        payload: cardData
    }
}