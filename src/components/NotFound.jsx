import { Link } from 'react-router-dom';

export const NotFound = () => (
  <>
    <h1
      style={{ color: 'tomato', fontSize: '1.5rem' }}
      aria-details='oops wrong page, with pleading emoji'
    >
      ...Oops, you went to the wrong page🥺
    </h1>
    <Link
      to='/'
      style={{ textDecoration: 'none', fontSize: '1.5rem' }}
    >
      <p aria-label='go back'>Go back home ☺️</p>
    </Link>
  </>
);
