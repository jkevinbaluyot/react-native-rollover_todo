import { Link } from 'expo-router';

function ListIndex() {
  return (
    <>
      'List#index'

      <Link
        href={{
          pathname: '/lists/[id]',
          params: { id: 'bacon' }
        }}
      >
        View List
      </Link>
    </>
  );
}

export default ListIndex
