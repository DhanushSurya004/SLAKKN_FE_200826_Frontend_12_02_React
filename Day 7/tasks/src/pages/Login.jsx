import { useState } from 'react'

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <section className="mx-auto mt-10 max-w-xl rounded-xl bg-white p-8 text-center shadow">
      <h1 className="mb-6 text-2xl font-bold">Login / Logout</h1>
      <p className="mb-6 text-lg">{isLoggedIn ? 'Welcome User' : 'Please Login'}</p>
      {isLoggedIn ? (
        <button className="rounded bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="rounded bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </section>
  )
}

export default Login
