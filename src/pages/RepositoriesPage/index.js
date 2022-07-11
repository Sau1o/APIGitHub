import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

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

  // eslint-disable-next-line no-unused-vars
  const repositories = [
    {
      name: 'Repo1',
      description: 'Descrição',
      html_url: 'https://google.com.br',
      language: 'Python',
    },
    {
      name: 'Repo2',
      description: 'Descrição',
      html_url: 'https://google.com.br',
      language: 'React',
    },
    {
      name: 'Repo3',
      description: 'Descrição',
      html_url: 'https://google.com.br',
      language: 'ReactNative',
    },
    {
      name: 'Repo4',
      description: 'Descrição',
      html_url: 'https://google.com.br',
      language: 'ReactNative',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};
export default RepositoriesPage;
