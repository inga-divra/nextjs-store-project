import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Discover a curated selection of premium products designed to elevate
          your lifestyle. Shop with confidence, knowing that each item has been
          crafted with care and quality. Explore now to find the perfect
          addition to your everyday essentials.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel></HeroCarousel>
    </section>
  );
};

export default Hero;
