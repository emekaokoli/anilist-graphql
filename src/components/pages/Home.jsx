import {
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import { query, url } from '../../utils/base_query';
import Pagination from '../Pagination';

export default function Home() {
  const [perPage] = useState(20);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [errorlog, setErrorlog] = useState('');

  const variables = useMemo(() => {
    return {
      search: query,
      page,
      perPage,
    };
  }, [page, perPage]);

  const { mutate, isLoading, error } = useMutation(() => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
      .then(handleResponse)
      .then(handleData)
      .catch((err) => setErrorlog(err));
  });

  function handleResponse(response) {
    return response.json().then(function ({ data }) {
      return response.ok ? data : Promise.reject(data);
    });
  }

  function handleData(data) {
    setData(data?.Page?.media);
    setPageInfo(data?.Page?.pageInfo);
  }

  // since theres no button to prompt fetching data, i decided to use useEffect
  useEffect(() => {
    mutate({ query, variables });
  }, [mutate, variables]);

  const { total, hasNextPage: hasnextpage } = pageInfo;

  if (isLoading) {
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <Text>loading data...</Text>
    </Stack>;
  }

  if (error) {
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <Text>{errorlog.message}</Text>
    </Stack>;
  }
  return (
    <TableContainer maxW='-moz-max-content'>
      <Table variant='simple' size='md'>
        <TableCaption>Anime movie list</TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Link</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item) => (
            <Tr key={item?.id}>
              <Td>{item?.title?.native}</Td>
              <Td>{item?.siteUrl}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Pagination
              page={page}
              setPage={setPage}
              hasNextPage={hasnextpage}
              totalRecord={total}
            />
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
