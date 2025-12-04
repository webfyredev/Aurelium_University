export default function ResearchInnovation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Side */}
        <div>
          <h2 className="text-3xl font-bold text-purple-950 mb-4">
            Research & Innovation
          </h2>

          <p className="text-gray-600 mb-6 text-sm">
            Our university is committed to advancing knowledge through world-class 
            research, groundbreaking innovation, and interdisciplinary collaboration.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-purple-600 mt-1">•</span>
              Cutting-edge research centers and laboratories
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-purple-600 mt-1">•</span>
              Recent publications in top international journals
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-purple-600 mt-1">•</span>
              Innovative student-led projects & competitions
            </li>
          </ul>

          {/* Mini Stats Row */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">12+</h3>
              <p className="text-gray-600 text-sm font-semibold text-purple-950">Research Centers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">250+</h3>
              <p className="text-gray-600 text-sm font-semibold text-purple-950">Publications</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">40+</h3>
              <p className="text-gray-600 text-sm font-semibold text-purple-950">Innovations</p>
            </div>
          </div>

          <button className="mt-8 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 transition cursor-pointer">
            Explore Research
          </button>
        </div>

        {/* Right Image Side */}
        <div className="relative group">
          <img
            src="/research/inn1.jpg"
            className="rounded-2xl shadow-lg w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500"
            alt="Research lab"
          />

          {/* Optional Small Overlay Image */}
          <img
            src="/research/inn2.jpg"
            className="absolute bottom-4 right-4 w-40 h-32 object-cover rounded-xl shadow-lg border-4 border-white"
            alt="Innovation team"
          />
        </div>

      </div>
    </section>
  );
}
