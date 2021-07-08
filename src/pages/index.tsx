import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/theme/Layout';
import Message from '@/components/Message';

import Title from '@/components/Title';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <main>
      <Title />
      <p>this body hs no margin padding because of reset style</p>
      <Message
        content="this is a styles message using by styled component and styled system theming"
        isOwner
        color="white"
        bg="tomato"
      />
    </main>
  </Layout>
);

export default Home;
