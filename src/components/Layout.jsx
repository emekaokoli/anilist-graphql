import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from './pages/Sidebar';

export default function Layout() {
  return (
    <Box display='flex'>
      <Sidebar />
      <Box as='main' flexGrow='1'>
        <Outlet />
      </Box>
    </Box>
  );
}
