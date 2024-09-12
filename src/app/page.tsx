import Header from '@/components/Header';
import Navbar from '../components/Navbar'
import SubHeader from '@/components/SubHeader';
import AnimatedList from '@/components/AnimatedList';

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <SubHeader/>
      <AnimatedList/>
    </main>
  )  
}


export default Home;