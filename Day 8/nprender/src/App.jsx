import Array from "./components/Array"
import Object from "./components/Object"
import ArrObj from "./components/ArrObj"
const App = () => {

  const arr = [1,2,3,4,5,6,7,8,9]
  const obj = {name:"Dhanush Surya",age:23,qualification:"MCA"}
  const players =[{name:"AAAAA",role:"Batter",performance:"Average"},{name:"BBBBB",role:"All-rounder",performance:"Excellent"},{name:"CCCCC",role:"Wicket-Keeper",performance:"Decent"},{name:"DDDDD",role:"Bowler",performance:"Good"}]


  return (
    <>
    
    <Array  nums={arr}/>
    <Object details={obj}/>
    <ArrObj team ={players}/>
    </>
  )
}

export default App