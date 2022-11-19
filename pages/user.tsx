import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import {  } from '@auth0/nextjs-auth0';


export default function User() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <img src={user.picture!} alt={user.name!} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

export const getServerSideProps = withPageAuthRequired();