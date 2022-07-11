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
  ];

  // calculo dos filters
  const languages = [
    { name: 'HTML', count: 5, color: '#f1c40f' },
    { name: 'ReactNative', count: 5, color: '#95a5a6' },
    { name: 'Python', count: 10, color: '#3498db' },
    { name: 'React', count: 8, color: '#2ecc71' },
  ];

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
