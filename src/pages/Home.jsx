import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-eco-green px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
          <img 
            src="/logo without background.png" 
            className="h-16 object-cover rounded-lg"
          />
            <h1 className="text-3xl font-bold">
              <span className="text-[rgb(59,139,65)] font-bold">ECO</span>
              <span className="text-[rgb(123,58,31)] font-bold">ROOT</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:opacity-80 font-medium underline">
              Home
            </Link>
            <a href="#" className="text-white hover:opacity-80 font-medium">
              Games
            </a>
            <a href="#" className="text-white hover:opacity-80 font-medium">
              Challenges
            </a>
            <Link to="/leaderboard" className="text-white hover:opacity-80 font-medium">
              Leaderboard
            </Link>
            <a href="#" className="text-white hover:opacity-80 font-medium">
              Rewards
            </a>
            <a href="#" className="text-white hover:opacity-80 font-medium">
              About Us
            </a>
          </nav>

          <button className="bg-eco-brown hover:opacity-90 text-white px-8 py-2 rounded-full font-bold">LOGIN</button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/beautiful-rolling-green-hills-landscape-with-blue-.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h2 className="relative text-5xl md:text-6xl font-bold text-white text-center px-4 text-balance">
          The Beginning of Eco-Friendly Future
        </h2>
      </section>

      {/* Play Learn Act Section */}
      <section className="bg-eco-brown px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-4xl font-extrabold text-white">
                  PLAY<span style={{ marginLeft: "2.5rem" }}></span>
                  LEARN<span style={{ marginLeft: "2.5rem" }}></span>
                  ACT
                </h3>
                <p className="text-white/90 text-lg">interactive games + real world challenges</p>
              </div>
            </div>

            <button className="bg-eco-cyan hover:opacity-90 text-white px-8 py-3 rounded-full font-bold text-lg mt-2">
              EXPLORE NOW {">>"}
            </button>
          </div>

          <div className="flex justify-center md:justify-end items-center gap-6">
            <div className="bg-eco-cream rounded-[32px] px-10 py-3 text-center min-w-[420px]">
              <h4 className="font-extrabold text-black text-xl tracking-wide mb-1">QUICK TIP :</h4>
              <p className="text-eco-green-strong font-extrabold text-2xl leading-tight mb-1 whitespace-nowrap">Take this week's challenge</p>
              <p className="text-black text-lg">segregate household waste for 7 days</p>
            </div>
            
            <img 
              src="/planting trees 2.png" 
              className="w-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-eco-cyan-soft px-6 py-12">
        <div className="max-w-7xl mx-auto flex justify-center gap-8">
          <div className="bg-white rounded-3xl px-8 py-6 flex items-center gap-4 min-w-80 shadow">
          <img 
            src="/tree.png" 
            className="w-32 h-32 object-cover rounded-lg"
          />
            <div>
              <div className="text-4xl font-black text-gray-900">1000+</div>
              <div className="text-gray-600 text-lg">Trees Planted</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl px-8 py-6 flex items-center gap-4 min-w-80 shadow">
          <img 
            src="/people photo.png" 
            className="w-32 h-32 object-cover rounded-lg"
          />
            <div>
              <div className="text-4xl font-black text-gray-900">50+</div>
              <div className="text-gray-600 text-lg">Students Enrolled</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl px-8 py-6 flex items-center gap-4 min-w-80 shadow">
          <img 
            src="/recycling logo.png" 
            className="w-32 h-32 object-cover rounded-lg"
          />
            <div>
              <div className="text-4xl font-black text-gray-900">100kg</div>
              <div className="text-gray-600 text-lg">Waste Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Tree Section */}
      <section className="bg-eco-light-green px-6 py-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img 
            src="/Plant___Earn_Rewards-removebg-preview.png" 
            className="w-64 h-32 object-cover rounded-lg"
          />
          
          <div className="text-center">
            <h3 className="text-5xl font-extrabold text-eco-brown mb-6">PLANT A TREE AND EARN REWARD POINTS</h3>
            <button className="inline-block bg-eco-reward-button hover:opacity-90 text-white px-8 py-3 rounded-full font-bold text-lg">
              REWARD SECTION{">>"}
            </button>
          </div>
          
          <img 
            src="/after_plant_and_earn_on_other_side-removebg-preview.png" 
            alt="Star badge" 
            className="w-64 object-cover rounded-full"
          />
        </div>
      </section>
    </div>
  )
}


