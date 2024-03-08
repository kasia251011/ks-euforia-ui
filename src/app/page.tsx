import About from "@/components/About";
import Main from "@/components/Main";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Main />
      <section id="news">
        <h1>News</h1>
      </section>
      <section id="players">
        <h1>Players</h1>
      </section>
      <About />
    </main>
  );
};

export default Home;
