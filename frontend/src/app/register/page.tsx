export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="w-full max-w-lg bg-slate-900 rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-white">
          Create Account
        </h1>

        <form className="space-y-4 mt-8">

          <input placeholder="Name" className="w-full p-3 rounded-lg bg-slate-800 text-white"/>

          <input placeholder="Email" className="w-full p-3 rounded-lg bg-slate-800 text-white"/>

          <input placeholder="Password" type="password" className="w-full p-3 rounded-lg bg-slate-800 text-white"/>

          <button className="w-full bg-green-600 p-3 rounded-lg text-white">
            Register
          </button>

        </form>

      </div>

    </div>
  )
}
