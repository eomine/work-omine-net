export default function Contact({ data }) {
  return (
    <footer className="p-40 dark:bg-gray-800">
      <div className="max-w-4xl">
        <h2 className="mb-8 text-5xl text-gray-400">
          Contact
        </h2>
        <ul className="font-bold mb-16 text-5xl">
          <li class="py-2">
            <button className="font-bold">
              eduardo.omine@gmail.com
            </button>
          </li>
          <li class="py-2">
            <a href="https://linkedin.com/in/eomine" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li class="py-2">
            <a href="https://github.com/eomine" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
        <h3 className="mb-4 text-3xl text-gray-400">
          Timezone
        </h3>
        <p className="text-3xl">
          GMT-3 (São Paulo, Brazil)
        </p>
      </div>
    </footer>
  );
}
