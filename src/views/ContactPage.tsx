export default function ContactPage(){
  return (
    <section className="min-h-screen px-4 py-10 text-white bg-zinc-950 md:px-12">
      <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">
        📬 Contact Us
      </h2>

      <form
        action="https://formspree.io/f/mayvlqre" // ⚠️ DEMO URL, cámbiala luego por la tuya
        method="POST"
        className="max-w-2xl p-6 mx-auto space-y-6 shadow-md bg-zinc-900 rounded-xl"
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 text-white border rounded-md bg-zinc-800 border-zinc-700"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 text-white border rounded-md bg-zinc-800 border-zinc-700"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 text-white border rounded-md bg-zinc-800 border-zinc-700"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 font-semibold bg-red-600 rounded-lg hover:bg-red-700"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 space-x-4 text-xl text-center text-zinc-300">
        <a
          href="https://www.linkedin.com/in/alejandro-medina-web-developer/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
          aria-label="LinkedIn Profile"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Meva1997"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
          aria-label="GitHub Profile"
        >
          GitHub
        </a>
        <a
          href="mailto:alexmedval2@gmail.com"
          className="hover:text-red-500"
          aria-label="Send Email"
        >
          alexmedval2@gmail.com
        </a>
      </div>

    </section>
  );
}
// Nota: Asegúrate de reemplazar la URL de Formspree por la tuya propia para que los mensajes se envíen correctamente.