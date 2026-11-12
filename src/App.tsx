
function App() {
  return (
    <main className="min-h-screen bg-base-200">
      <header className="navbar bg-base-100 shadow-sm px-8">
        <div className="flex-1">
          <a className="text-xl font-bold text-primary">
            Saúde+
          </a>
        </div>

        <div className="flex gap-3">
          <button className="btn btn-ghost">
            Especialidades
          </button>

          <button className="btn btn-primary">
            Profissionais
          </button>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Encontre o cuidado que você precisa.
        </h1>

        <p className="text-base-content/70 mb-8">
          Consulte profissionais e especialidades
          da área da saúde.
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar especialidade..."
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary">
            Buscar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Cardiologia</h2>
              <p>Especialistas em saúde cardiovascular.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">
                  Explorar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
