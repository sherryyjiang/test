export default function Home() {
  const cats = [
    {
      breed: "Persian",
      description: "Known for their long, luxurious coats and flat faces. Persians are sweet, gentle cats that prefer a calm environment.",
      origin: "Iran (Persia)"
    },
    {
      breed: "Siamese",
      description: "Distinctive color points and blue eyes. Very vocal, intelligent, and social cats that form strong bonds with their owners.",
      origin: "Thailand"
    },
    {
      breed: "Maine Coon",
      description: "One of the largest domestic cat breeds. Known for their thick fur, friendly personality, and distinctive chirping sounds.",
      origin: "United States"
    },
    {
      breed: "Bengal",
      description: "Wild-looking cats with distinctive spotted or marbled coats. Highly active, playful, and intelligent.",
      origin: "United States"
    },
    {
      breed: "Ragdoll",
      description: "Large, laid-back cats known for going limp when held. Very affectionate with beautiful blue eyes and color point coats.",
      origin: "United States"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mb-12">
          <span className="block">Cat Breeds</span>
          <span className="block text-indigo-600 text-2xl sm:text-3xl mt-2 font-medium">Your Complete Guide</span>
        </h1>
        
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-2xl">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-4 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Breed</th>
                      <th scope="col" className="px-3 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                      <th scope="col" className="px-3 py-4 text-left text-sm font-semibold text-gray-900">Origin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {cats.map((cat, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-600 sm:pl-6">{cat.breed}</td>
                        <td className="px-3 py-4 text-sm text-gray-700">{cat.description}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cat.origin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
