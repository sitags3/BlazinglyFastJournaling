import CarouselCard from '@/components/carousel/CarouselCard';
import { journalEntries } from '@/data';

const Home = () => {

  return (
    <main>
      <CarouselCard journalEntry={journalEntries[4]} level={0}/>
    </main>
  )
}

export default Home;