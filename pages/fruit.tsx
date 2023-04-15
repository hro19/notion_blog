// https://techblg.app/articles/how-to-fetch-data-via-graphql-in-react/
// https://techblg.app/articles/how-to-serve-graphql-api-by-next.js-in-vercel/

import React from 'react';
import { ApolloProvider, gql, useQuery } from '@apollo/client';

// applo client
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://graphql-api-example.vercel.app/api/graphql',
  }),
});

const FRUIT_QUERY = gql`
  query {
    fruits {
      id
      name
      price
    }
  }
`;

const Fruits = () => {
  const { loading, error, data } = useQuery(FRUIT_QUERY);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2 className='text-2xl font-bold w-1/6 border-b-orange-700 border-b-2'>
        TodoList
      </h2>
      {data.fruits.map((fruit: any) => (
        <p key={fruit.id}>
          {fruit.name}: {fruit.price}円
        </p>
      ))}
    </div>
  );
};

function dog() {
  return (
    <ApolloProvider client={client}>
      <Fruits />
    </ApolloProvider>
  );
}

export default dog;
