import { useState } from "react"
function AddTodoForm(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    const [newActivity, setNewActivity] = useState("")
    function handleChange(evt) {
        setNewActivity(evt.target.value)
    }
    function addActivity() {
        if (newActivity.trim() === "") {
            return;
        }

        setActivityArr([...activityArr, { id: activityArr.length + 1, activity: newActivity }]);
        setNewActivity("");
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={newActivity} onChange={handleChange} type="text" className="border border-black rounded bg-transparent p-2" placeholder="Next activity?" />
                <button onClick={addActivity} disabled={newActivity.trim() === ""} className="bg-green-500 text-white border border-black rounded p-1 mx-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">ADD</button>
            </div>
        </div>
    )
}
export default AddTodoForm;