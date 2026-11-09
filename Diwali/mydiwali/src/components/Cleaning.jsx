const Cleaning = () => {
  return (
    <><div id="clean" className="scroll-mt-20 bg-[#fffaf2] px-6 py-20 sm:px-10">
      <div className="shine-card mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-amber-200 p-6 shadow-sm transition duration-300 hover:border-amber-400 sm:p-10 md:grid-cols-[0.85fr_1.15fr]">
        <div className="order-2 grid grid-cols-2 gap-4 md:order-1">
          <div className="rounded-3xl bg-emerald-100 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"><p className="font-bold text-emerald-950">House cleaned</p></div>
          <div className="rounded-3xl bg-sky-100 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"><p className="font-bold text-sky-950">Washroom washed</p></div>
          <div className="col-span-2 rounded-3xl bg-amber-100 p-5 text-center text-sm font-medium text-amber-950 transition duration-300 hover:-translate-y-1 hover:shadow-lg">A fresh, welcoming home for the festival</div>
        </div>
        <div className="order-1 md:order-2">
          <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-900">GETTING THE HOME READY</p>
          <h2 className="text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">A clean start for Diwali</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">We cleaned the house and washed the washroom, making everything fresh and ready for the celebrations.</p>
        </div>
      </div>
    </div></>
    
  )
}

export default Cleaning
