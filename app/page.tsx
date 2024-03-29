export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center p-24 gap-y-6">
      <div className="flex flex-col justify-between z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-row md:flex-row">
        <div className="flex flex-col w-auto justify-center border border-gray-200 from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:flex-row lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:bg-gradient-to-b lg:p-4 lg:dark:bg-zinc-800/30 md:flex-row md:bg-transparent md:border md:bg-gray-200 md:p-4 md:rounded-xl md:border md:dark:bg-zinc-800/30">
          Salvatore Riccardi&nbsp;
          <code className="font-mono font-bold text-center">My Own Website</code>
        </div>
        <div className="hidden w-auto pb-6 pt-8 lg:static lg:h-auto lg:w-auto lg:p-4 lg:bg-none lg:block md:p-4 md:block">
          <a
            className="pointer-events-none p-8 font-bold lg:pointer-events-auto lg:p-4 md:p-4"
            href="https://www.linkedin.com/in/salvatore-riccardi/"
            target="_blank"
          >
            I&apos;m Social
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center text-center my-6">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h2 className="mb-3 text-2xl font-semibold">Educational Projects</h2>
        </div>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://salvatorericcardi.github.io/alpaca-generator"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Alpaca Image Generator{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &rarr;
              </span>
            </h2>
            <div className="flex flex-row gap-x-2 mb-3 text-xs opacity-50">
              <span className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                html
              </span>
              <span className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                css
              </span>
              <span className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                javascript
              </span>
            </div>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Customize your alpaca or generate a random one and download it.
            </p>
          </a>
        </div>
      </div>
      <div id="contacts" className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="text-center lg:p-4 lg:text-start md:text-start">
          Proudly based in <strong>Fondi</strong>
        </div>
        <div className="hidden fixed bottom-0 left-0 items-center justify-center aspect-square h-48 w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="inline-block pointer-events-none max-h-full text-xl leading-3 p-8 lg:pointer-events-auto lg:p-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
            href="#main"
          >
            &uarr;
          </a>
        </div>
      </div>
    </main>
  );
}
