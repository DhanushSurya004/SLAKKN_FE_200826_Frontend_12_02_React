const Famtime = () => {
  return (
    <>
    <div id="movie" className="scroll-mt-20 bg-[#fffaf2] px-6 py-20 text-slate-900 sm:px-10">
      <div className="shine-card mx-auto max-w-6xl rounded-3xl border border-amber-200 p-6 shadow-sm transition duration-300 hover:border-amber-400 sm:p-10">
        <div className="text-center">
          <p className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold tracking-wide text-amber-800">DIWALI MOVIE NIGHT</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Family time, double feature</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">We enjoyed one movie in the afternoon and another at night.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-amber-100 bg-amber-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src="/nandhi-varman.png" alt="Nandhi Varman movie poster" className="aspect-[3/4] w-full object-cover object-top" />
            <div className="p-7">
              <span className="text-sm font-bold tracking-[0.2em] text-amber-700">AFTERNOON MOVIE</span>
              <h3 className="mt-3 text-3xl font-extrabold text-slate-900">Nandhi Varman</h3>
              <p className="mt-2 text-slate-600">Our afternoon movie.</p>
            </div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-amber-100 bg-amber-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src="/jailer-2.png" alt="Jailer 2 movie poster" className=" w-full object-cover object-top" />
            <div className="p-7">
              <span className="text-sm font-bold tracking-[0.2em] text-amber-700">NIGHT MOVIE</span>
              <h3 className="mt-3 text-3xl font-extrabold text-slate-900">Jailer 2</h3>
              <p className="mt-2 text-slate-600">Our movie for the night.</p>
            </div>
          </article>
        </div>
        <p className="mt-9 text-center text-lg font-semibold text-amber-700" lang="ta">இனிய தீபாவளி நல்வாழ்த்துகள்! உங்கள் வாழ்வில் மகிழ்ச்சியும் ஒளியும் நிறையட்டும்.</p>
      </div>
    </div></>
    
  )
}

export default Famtime
