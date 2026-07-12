export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-md bg-slate-900 rounded-xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-white">
          AssetFlow
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Sign in to continue
        </p>

        <form className="space-y-4 mt-8">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-slate-800 p-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-slate-800 p-3 text-white outline-none"
          />

          <button
            className="w-full rounded-lg bg-blue-600 p-3 text-white font-semibold hover:bg-blue-700"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  )
}
