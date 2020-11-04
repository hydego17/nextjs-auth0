import React from 'react';
import { useUser, withAuth } from '@auth0/nextjs-auth0';

import Layout from '../components/layout';
import LoginRedirect from '../components/login-redirect';
import auth0 from '../lib/auth0';

export function ProtectedPage(): React.ReactElement {
  const { user, loading } = useUser();

  return (
    <Layout>
      <h1>Protected Page</h1>

      {loading && <p>Loading profile...</p>}

      {!loading && user && (
        <>
          <p>Profile:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}

export default withAuth(ProtectedPage, LoginRedirect, auth0);
