import { useState } from 'react'

const Task2 = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="space-y-4 rounded border bg-white p-6">
        <h1 className="text-xl font-semibold text-gray-900">Task 2 — Simple Counter</h1>
        <p className="text-2xl text-gray-800">Count: {count}</p>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Increment</button>
          <button type="button" onClick={() => setCount((currentCount) => currentCount - 1)} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Decrement</button>
          <button type="button" onClick={() => setCount(0)} className="rounded border px-4 py-2 text-gray-700 hover:bg-gray-100">Reset</button>
        </div>
      </section>
    </>
  )
}

export default Task2
