import { Button } from '@/components/ui/button';

const Homepage = () => {
  return (
    <div>
      <h1 className='text-3xl'>HomePage</h1>
      <Button variant='default' size='lg' className='capitalize m-8'>
        click me
      </Button>
    </div>
  );
};

export default Homepage;
