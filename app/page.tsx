import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center items-center max-w-screen-sm flex-col mx-auto p-8">
      <section className="bg-slate-900 rounded-lg shadow-md w-full">
        <div className="px-4 py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
              Poopoo<strong className="font-extrabold text-purple-700 sm:block">and Peepee</strong>
            </h1>
            <p className="mt-4 text-white sm:text-xl/relaxed">
              Poopoo and peepee
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/protect" className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto">
                Sign In to Poo or Pee
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
