import { Input } from '../ui/input';

const NavSearch = () => {
  return (
    <Input
      className='max-w-xs dark:bg-muted capitalize'
      type='search'
      placeholder='search product...'
    />
  );
};

export default NavSearch;
