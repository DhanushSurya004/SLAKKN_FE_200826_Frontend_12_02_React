import { useState } from 'react'

const Task1 = () => {
  const [name, setName] = useState('Arun')

  const handleChangeName = () => {
    setName('Kumar')
  }

  return (
    <>
      <section className="space-y-4 rounded border bg-white p-6">
        <h1 className="text-xl font-semibold text-gray-900">Task 1 — Student Name Update</h1>
        <p className="text-gray-700">Student name: {name}</p>
        <button type="button" onClick={handleChangeName} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Change Name
        </button>
      </section>
    </>
  )
}

export default Task1
