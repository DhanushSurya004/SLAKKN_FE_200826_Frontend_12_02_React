import { useState } from 'react'

const emptyStudent = { name: '', email: '', course: '' }

const Task3 = () => {
  const [student, setStudent] = useState(emptyStudent)
  const [students, setStudents] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [viewingStudent, setViewingStudent] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setStudent({ ...student, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      setStudents(students.map((item) => item.id === editingId ? { ...item, ...student } : item))
      setEditingId(null)
    } else {
      setStudents([...students, { id: Date.now(), ...student }])
    }
    setStudent(emptyStudent)
  }

  const handleEdit = (item) => {
    setStudent({ name: item.name, email: item.email, course: item.course })
    setEditingId(item.id)
    setViewingStudent(null)
  }

  const handleDelete = (id) => {
    setStudents(students.filter((item) => item.id !== id))
    if (viewingStudent?.id === id) setViewingStudent(null)
    if (editingId === id) {
      setEditingId(null)
      setStudent(emptyStudent)
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setStudent(emptyStudent)
  }

  return (
    <>
    <div className="space-y-5 rounded-lg bg-white p-5 sm:p-7">
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1 text-sm font-medium text-gray-700">Name
              <input name="name" value={student.name} onChange={handleChange} placeholder="Student name" className="block w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" required />
            </label>
            <label className="space-y-1 text-sm font-medium text-gray-700">Email
              <input name="email" type="email" value={student.email} onChange={handleChange} placeholder="student@example.com" className="block w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" required />
            </label>
            <label className="space-y-1 text-sm font-medium text-gray-700 sm:col-span-2">Course
              <input name="course" value={student.course} onChange={handleChange} placeholder="Course name" className="block w-full rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" required />
            </label>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">{editingId ? 'Save Changes' : 'Add Student'}</button>
            {editingId && <button type="button" onClick={handleCancelEdit} className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>}
          </div>
        </form>
      </div>

      {viewingStudent && <div className="relative rounded-lg border border-blue-200 bg-blue-50 p-4">
        <button type="button" onClick={() => setViewingStudent(null)} aria-label="Close student details" className="absolute right-3 top-3 rounded px-2 py-1 text-gray-600 hover:bg-blue-100">×</button>
        <h2 className="mb-2 font-semibold">Student Details</h2>
        <p className="text-sm text-gray-700">Name: {viewingStudent.name}</p>
        <p className="text-sm text-gray-700">Email: {viewingStudent.email}</p>
        <p className="text-sm text-gray-700">Course: {viewingStudent.course}</p>
      </div>}

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2 className="font-semibold">Student Records</h2>
        </div>
        {students.length === 0 ? <p className="p-5 text-sm text-gray-500">No students added yet.</p> : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-600">
                <tr><th className="px-4 py-3 font-medium">Name</th><th className="px-4 py-3 font-medium">Email</th><th className="px-4 py-3 font-medium">Course</th><th className="px-4 py-3 font-medium">Actions</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map((e, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-medium text-gray-800">{e.name}</td>
                    <td className="px-4 py-3 text-gray-600">{e.email}</td>
                    <td className="px-4 py-3 text-gray-600">{e.course}</td>
                    <td className="px-4 py-3"><div className="flex gap-1.5">
                      <button type="button" onClick={() => setViewingStudent(e)} className="rounded border border-gray-300 px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-50">View</button>
                      <button type="button" onClick={() => handleEdit(e)} className="rounded border border-blue-200 px-2.5 py-1 text-xs text-blue-700 hover:bg-blue-50">Edit</button>
                      <button type="button" onClick={() => handleDelete(e.id)} className="rounded border border-red-200 px-2.5 py-1 text-xs text-red-700 hover:bg-red-50">Delete</button>
                    </div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Task3
