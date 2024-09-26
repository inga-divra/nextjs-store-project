import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  return (
    <Button className='p-2 cursor-pointer' size='icon' variant='outline'>
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
