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

    if(!sname || !sage || !sphone){
      alert("Fill the Form")
      return
    }

    const obj ={id:Date.now(),name:sname,age:sage,phone:sphone}

    const copy =[...data]

    copy.push(obj)

    setData(copy)

    setName("")
    setAge("")
    setPhone("")

  }
  return (
    <>
    <div>
      <form>
        <input type="text" placeholder="Name" value={sname} onChange={showName} className="mr-2 mb-2"/>
        <input type="number" placeholder="Age" value={sage} onChange={showAge} className="mr-2 mb-2"/>
        <input type="number" placeholder="Phone" value={sphone} onChange={showPhone} className="mr-2 mb-2"/>
        <button onClick={handleClick} className="bg-blue-400 p-2">Submit</button>
      </form>

      <table className="border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i)=>(
              <tr key={i}>
                <td className="border p-2">{e.id}</td>
                <td className="border p-2">{e.name}</td>
                <td className="border p-2">{e.age}</td>
                <td className="border p-2">{e.phone}</td>
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
