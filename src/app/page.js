const teamMembers = [
  { name: "Esther Howard", role: "Founder", imgSrc: "/assets/founder.jpg" },
  { name: "Cody Fisher", role: "Developer", imgSrc: "/assets/developer.jpg" },
  { name: "Brooklyn Simmons", role: "Designer", imgSrc: "/assets/designer.jpg",},
];
const stats = [
  { number: "350+", label: "Clients Worldwide" },
  { number: "20+", label: "Team Members" },
  { number: "100+", label: "Projects Completed" },
  { number: "85M+", label: "Revenue Generated" },
];
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* İlk görsel ve ortasında başlık */}
      <div className="relative w-full h-auto">
        <img
          src="/assets/hands.jpg"
          alt="Hands"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-9xl font-bold text-center px-32 -mt-60">
            Let&apos;s create something great together.
          </h1>
        </div>
      </div>

      {/* 2. kısım başlık ve text */}
      <div className="px-28 py-40">
        <h2 className="text-5xl font-bold text-left mb-16">Who we are</h2>
        <p className="text-4xl text-left">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success. We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>
      {/* 3. kısım kenarları boşluklu image */}
      <div className="flex justify-center items-center px-28 pb-60">
        <img
          src="/assets/orange.jpg"
          alt="Centered Image"
          className="max-w-full h-auto w-full"
        />
      </div>
      {/* 3. kısım Meet heroes */}
      <div className="px-60 pb-40">
        <h2 className="text-4xl font-bold text-center pb-20">
          Meet the heroes behind the magic
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden transform scale-90 hover:scale-100 transition-transform duration-200">
              <div
                className={`w-full h-auto flex justify-center items-center p-6`}
              >
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-auto "
                />
              </div>
              <div className="p-6 w-full text-left">
                <h2 className="text-3xl font-semibold pb-4">{member.name}</h2>
                <p className="text-2xl text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*4. kısım istatistik */}
      <div className="bg-black py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 text-left">
          {stats.map((stat) => (
            <div key={stat.label} className="text-white">
              <h3 className="text-yellow-400 text-6xl font-semibold pb-5">
                {stat.number}
              </h3>
              <p className="text-3xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* 5. kısım görsel ve form */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white py-40">
        {/* Sol Taraftaki Resim */}
        <div className="flex justify-center items-center w-full md:w-1/2 p-8">
          <img
            src="/assets/form-image.jpg"
            alt="Team Members"
            className="max-w-full h-auto"
          />
        </div>

        {/* Sağ Taraftaki Form */}
        <div className="w-full md:w-1/2 pr-20">
          <h2 className="text-5xl font-bold mb-8 text-right pl-96">
            We&apos;d love to hear from you
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-4 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-4 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="url"
                placeholder="Website URL*"
                className="w-full p-4 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Project Details*"
                className="w-full p-4 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="5"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-black text-white text-2xl font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Send Proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
