import React from "react";
import Search from "../search/Search";
import image from "../../assets/bg1.jpg";
// import Youtube from "react-youtube";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Footer DEVELOPER="__HTOO_MYAT_NYI_NYI" />
    </div>
  );
};

export default Home;

function Hero() {
  // console.log(sessionStorage.getItem("userInfo"), "at frontend");
  // const profile = sessionStorage.getItem('user')
  return (
    <section className="relative">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="container mx-auto px-4 py-24">
          <Search />
          <h1 className="text-5xl font-bold text-white">
            Welcome to Our World
          </h1>
          <p className="text-lg text-white mb-8">
            Discover the future of ___YOUR_CARRIER____
          </p>
          <button
            onClick={() => console.log("clicked")}
            className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-sky-400 dark:bg-sky-400 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-green-400 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4">Feature 1</h3>
            <p>Description of Feature 1</p>
            {/* <Youtube videoId="pcrFMqMsATc" /> */}
          </div>
          <div className="bg-white dark:bg-green-400 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4">Feature 1</h3>
            <p>Description of Feature 2</p>
            {/* <Youtube videoId="8qAZ68A_PQw" /> */}
          </div>
          <div className="bg-white shadow-md dark:bg-green-400 rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4">Feature 1</h3>
            <p>Description of Feature 3</p>
            {/* <Youtube videoId="1S5xIujv1RM" /> */}
          </div>
          {/* ... more feature cards ... */}
        </div>
      </div>
    </section>
  );
}

function Footer({ DEVELOPER }) {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>About our company and mission.</p>
          </div>
          {/* ... more footer sections ... */}
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; DEVELOP_BY_{DEVELOPER}</p>
        </div>
      </div>
    </footer>
  );
}
