import { useState } from "react"

const App = () => {

  let [sname,setName]=useState("")
  let [sage,setAge]=useState("")
  let [sphone,setPhone]=useState("")
  let [data,setData]=useState([])

  const showAge=(e) =>{
    setAge(e.target.value)

  }

  const showName=(e) =>{

    setName(e.target.value)
  }

  const showPhone=(e) =>{

    setPhone(e.target.value)
  }
  const handleClick=(e) =>{

    e.preventDefault()

    const obj ={id:Date.now(),name:sname,age:sage,phone:sphone}

    const copy =[...data]

    copy.push(obj)

    setData(copy)

  }
  return (
    <>
    <div>
      <form>
        <input type="text" placeholder="Name" onChange={showName}/>
        <input type="number" placeholder="Age" onChange={showAge}/>
        <input type="number" placeholder="Phone" onChange={showPhone}/>
        <button onClick={handleClick} className="bg-blue-400 p-2">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i)=>(
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App