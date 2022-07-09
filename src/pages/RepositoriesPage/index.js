import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const RepositoriesPage = () => {
  const user = {
    login: 'Sau1o',
    avatar_url: 'https://avatars.githubusercontent.com/u/30470257?v=4',
    name: 'Saulo Coelho',
    followers: 26,
    following: 19,
    company: null,
    blog: 'https://google.com.br',
    location: 'Bauru - SP',
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};
export default RepositoriesPage;
