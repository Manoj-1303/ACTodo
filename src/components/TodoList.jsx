import { useState } from "react";
import TodoItem from "./TodoItem";
function TodoList(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    return (
        <div className="bg-[#f0abf7] border rounded-md p-2 grow">
            <h1 className="text-2xl font-medium">Today's activity</h1>
            
            {activityArr.length===0?<p>You haven't added anything yet</p>:""}
            {
                activityArr.map(function(item,index){
                    return <TodoItem key={item.id} id={item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
                })
            }
        </div>
    )
}
export default TodoList;