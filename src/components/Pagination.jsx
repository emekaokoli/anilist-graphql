import { Button, Container, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Pagination({
  page,
  setPage,
  totalRecord,
  hasNextPage,
}) {
  const prePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextpage = () => {
    if (page > 0 && hasNextPage) {
      setPage(page + 1);
    }
  };

  return (
    <Container
      as='td'
      display='flex'
      justifyContent='flex-end'
      alignItems='center'
    >
      <Button
        variant='ghost'
        colorScheme='teal'
        size='sm'
        onClick={prePage}
        disabled={page === 1 ? 'disabled' : ''}
      >
        Previous
      </Button>

      <Button
        disabled={page === totalRecord ? 'disabled' : ''}
        variant='ghost'
        colorScheme='teal'
        size='sm'
        onClick={nextpage}
      >
        Next
      </Button>
      <Text>
        page {page} of {totalRecord}
      </Text>
    </Container>
  );
}
Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool,
  totalRecord: PropTypes.number,
};
