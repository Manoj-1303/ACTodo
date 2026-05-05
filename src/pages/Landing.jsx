import Header from "../components/Header";
import Cards from "../components/Cards";
import TodoContainer from "../components/TodoContainer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
function Landing() {
    const data = useLocation()
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const formattedDate = currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const formattedTime = currentTime.toLocaleTimeString('en-US', { hour12: false });
    return (
        <div className="min-h-screen bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md ">
                {/*Header*/}
                <Header username={data.state.user}/>
                {/*Card*/}
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Cards bgColor={"#FD6663"} title={"23°"} subtitle={"Vellore"} />
                    <Cards bgColor={"#00BBE6"} title={formattedDate} subtitle={formattedTime} />
                    <Cards bgColor={"#00FE8A"} title={"Built using"} subtitle={"React"} />
                </div>
                {/*TodoContainer*/}
                <TodoContainer />


            </div>
        </div>
    )
}

export default Landing