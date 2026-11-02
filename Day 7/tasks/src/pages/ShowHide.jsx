import { useState } from 'react'

const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section className="mx-auto mt-10 max-w-xl rounded-xl bg-white p-8 text-center shadow">
      <h1 className="mb-6 text-2xl font-bold">Show / Hide Text</h1>
      <div className="mb-6 flex justify-center gap-3">
        <button className="rounded bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700" onClick={() => setIsVisible(true)}>Show</button>
        <button className="rounded bg-slate-600 px-5 py-2 font-semibold text-white hover:bg-slate-700" onClick={() => setIsVisible(false)}>Hide</button>
      </div>
      {isVisible && <p className="text-lg">Welcome to React</p>}
    </section>
  )
}

export default ShowHide
