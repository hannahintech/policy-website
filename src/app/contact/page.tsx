// // src/app/contact/page.tsx

// export default function ContactPage() {
//   return (
//     <main className="mx-auto max-w-2xl px-4 py-8 sm:px-8">
//       <h1 className="mb-6 font-heading text-3xl">Contact Us</h1>

//       <p className="mb-6 text-lg">
//         Got a question, suggestion, or want to help build this site? Drop us a message using the
//         form below.
//       </p>

//       <form
//         className="space-y-6"
//         onSubmit={e => {
//           e.preventDefault()
//           /* global alert */
//           alert('Thank you for your message. Form submission is not yet wired up.')
//         }}
//       >
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-800">
//             Your Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-fair focus:ring-fair"
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-800">
//             Your Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-fair focus:ring-fair"
//           />
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-800">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows={5}
//             required
//             className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-fair focus:ring-fair"
//           />
//         </div>

//         <button
//           type="submit"
//           className="rounded bg-fair px-4 py-2 text-white transition hover:bg-forest"
//         >
//           Send Message
//         </button>
//       </form>
//     </main>
//   )
// }
