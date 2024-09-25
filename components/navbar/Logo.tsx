import Link from 'next/link';
import { Button } from '../ui/button';
import { FaStoreAlt } from 'react-icons/fa';

const Logo = () => {
  return (
    <Button size={'icon'} asChild>
      <Link href='/'>
        <FaStoreAlt className='w-6 h-6' />
      </Link>
    </Button>
  );
};

export default Logo;
