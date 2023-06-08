import { useSelector } from 'react-redux'

const initialState={
    days:[
        {
            id:0,day:'Sunday',noOfTasks:0
        },
        {
            id:1,day:'Monday',noOfTasks:0
        },
        {
            id:2,day:'Tuesday',noOfTasks:0
        },
        {
            id:3,day:'Wednesday',noOfTasks:0
        },
        {
            id:4,day:'Thursday',noOfTasks:0
        },
        {
            id:5,day:'Friday',noOfTasks:0
        },
        {
            id:6,day:'Saturday',noOfTasks:0
        },

    ]
}

  const reducerWeekly=(state=initialState,action)=>{
    const dayId  = action.payload;
    switch(action.type){
        case 'ADD_DAY':
            
            return {
              ...state,
              days: state.days.map(day => {
                if (day.id === dayId) {
                  return {
                    ...day,
                    noOfTasks: day.noOfTasks + 1,
                  };
                }
                return day;
              }),
            };
            
        case 'DEL_DAY': 
        return{
            ...state,
            days:state.days.map(dayy=>{
                if(dayy.day === dayId){
                    return {
                        ...dayy,
                        noOfTasks: dayy.noOfTasks - 1,
                      };
                }
                return dayy;
            }),
        };
        case 'SET_TASK':
          
            const dayCounts = dayId.reduce((counts, card) => {
                const postedOn = new Date(card.posted_on);
                const dayOfWeek = postedOn.toLocaleDateString('en-US', { weekday: 'long' });
        
                counts[dayOfWeek] = (counts[dayOfWeek] || 0) + 1;
                return counts;
              }, {});
  
        
              return {
                ...state,
                days: state.days.map(day => ({
                  ...day,
                  noOfTasks: dayCounts[day.day] || 0,
                })),
              };
        default:
            return state;
        
    }

  }
  export default reducerWeekly