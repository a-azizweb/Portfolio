import Main from '../components/Main';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
function HomePage() {
  return (
    <div>
      <Head>
        <title>Ahmad | Front-end developer</title>
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default HomePage;
