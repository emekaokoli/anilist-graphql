import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Box as='aside' w={240} h='100vh'>
      <Box as='header' h='50px'>
        <Heading
          as='h1'
          fontSize='xx-large'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Link to='/'>Logo</Link>
        </Heading>
      </Box>
      <Spacer />
      <Divider />
      <List spacing={3} direction='column'>
        <ListItem>
          <Link to='/'>Home</Link>
        </ListItem>
      </List>
    </Box>
  );
}
