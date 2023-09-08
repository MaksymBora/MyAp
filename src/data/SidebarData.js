import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
export const SidebarData = [
  {
    title: 'Watch',
    icon: <LocalMoviesIcon />,
    link: 'movies',
  },
  {
    title: 'News',
    icon: <NewspaperIcon />,
    link: 'news',
  },
  {
    title: 'Kitchen',
    icon: <RestaurantIcon />,
    link: 'recipes',
  },
  {
    title: 'To Do',
    icon: <FormatListBulletedIcon />,
    link: 'todo',
  },
  {
    title: 'My fitness',
    icon: <FitnessCenterIcon />,
    link: 'fitness',
  },
  {
    title: 'Wallet',
    icon: <AccountBalanceWalletIcon />,
    link: 'wallet',
  },
];
