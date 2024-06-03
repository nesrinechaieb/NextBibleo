import CarouselHome from '@/components/client/carouselHome'
import Footer from '@/components/client/footer'
import MainGridsHome from '@/components/client/mainGridsHome';


const page = () => {
  return (
    <div>
      <CarouselHome />
      <Footer />
      <MainGridsHome/>
    </div>
  );
}

export default page