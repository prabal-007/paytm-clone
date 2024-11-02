import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="bg-blue-100 h-[100vh] flex flex-col justify-center items-center">
      <Navbar />
      <h1 className="font-bold text-2xl">New Payments App</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident possimus officiis nobis non sunt rem ad veniam nostrum, est at ea voluptates optio iusto dolore?</p>
      <Footer />
    </div>
  )
}

export default Home
