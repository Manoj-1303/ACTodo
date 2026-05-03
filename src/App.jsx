import Header from "./components/Header"
import Cards from "./components/Cards"
import TodoContainer from "./components/TodoContainer"
function App() {
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/*Header*/}
        <Header />
        {/*Card*/}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Cards bgColor={"#FD6663"} title={"23"} subtitle={"Vellore"}/>
          <Cards bgColor={"#00BBE6"} title={"May 4"} subtitle={"17:59:07"}/>
          <Cards bgColor={"#00FE8A"} title={"Built using"} subtitle={"React"}/>
        </div>
        {/*TodoContainer*/}
        <TodoContainer/>
        
        
      </div>
    </div>
  )
}

export default App