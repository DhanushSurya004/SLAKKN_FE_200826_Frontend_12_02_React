const Pooja = () => {
  return (
    <><div id="pooja" className="scroll-mt-20 relative overflow-hidden bg-[#fffaf2] px-6 py-20 sm:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-amber-200 p-6 shadow-sm transition duration-300 hover:border-amber-400 hover:shadow-[0_0_28px_rgba(245,158,11,0.4)] sm:p-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold tracking-wide text-orange-800 shadow-sm">DIWALI MORNING</p>
          <h1 className="text-4xl font-black tracking-tight text-orange-950 sm:text-6xl">A blessed Pooja</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-orange-900/80">We began Diwali with a prayer and performed Pooja for my father. A peaceful moment to be together, give thanks, and welcome the festival.</p>
        </div>
        <img
          src="/pooja-diwali.png"
          alt="Diwali"
          className="mx-auto aspect-square w-full max-w-sm rounded-[2.5rem] object-cover shadow-xl shadow-orange-900/10 transition duration-300 hover:scale-[1.03] hover:shadow-2xl"
        />
      </div>
    </div></>
  )
}

export default Pooja
