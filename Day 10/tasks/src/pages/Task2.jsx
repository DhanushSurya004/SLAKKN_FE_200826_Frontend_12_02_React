import { useState } from 'react'

const Task2 = () => {
  const [student, setStudent] = useState({ name: '', email: '', age: '' })
  const [submittedStudent, setSubmittedStudent] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setStudent({ ...student, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedStudent({ ...student })
  }

  return (
    <>
    <div className="space-y-5 rounded-lg bg-white p-5 sm:p-7">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-1 text-sm font-medium text-gray-700">Name
            <input name="name" type="text" value={student.name} onChange={handleChange} placeholder="Student name" className="block w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" required />
          </label>
          <label className="space-y-1 text-sm font-medium text-gray-700">Email
            <input name="email" type="email" value={student.email} onChange={handleChange} placeholder="student@example.com" className="block w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" required />
          </label>
          <label className="space-y-1 text-sm font-medium text-gray-700 sm:col-span-2">Age
            <input name="age" type="number" min="1" value={student.age} onChange={handleChange} placeholder="Age" className="block w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" required />
          </label>
        </div>
        <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Submit Details</button>
      </form>
      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="w-full min-w-[420px] text-left text-sm">
          <thead className="bg-blue-600 text-white">
            <tr><th className="px-4 py-3 font-medium">Name</th><th className="px-4 py-3 font-medium">Email</th><th className="px-4 py-3 font-medium">Age</th></tr>
          </thead>
          <tbody>
            {submittedStudent ? <tr><td className="px-4 py-3 text-gray-700">{submittedStudent.name}</td><td className="px-4 py-3 text-gray-700">{submittedStudent.email}</td><td className="px-4 py-3 text-gray-700">{submittedStudent.age}</td></tr> : <tr><td colSpan="3" className="px-4 py-3 text-gray-500">No student submitted yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Task2
