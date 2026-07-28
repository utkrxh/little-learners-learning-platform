import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Features from "../components/home/Features";
import HomeProgressWidget from "../components/progress/HomeProgressWidget";

function Home() {
  return (
    <>
      <Hero />
      <HomeProgressWidget />
      <Categories />
      <Features />
    </>
  );
}

export default Home;
