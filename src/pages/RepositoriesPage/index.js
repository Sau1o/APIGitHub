import React, { useState } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

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
      id: '1',
      name: 'Repo1',
      description: 'Descrição',
      html_url: 'https://google.com.br',
      language: 'Python',
    },
    {
      id: '2',
      name: 'Repo2',
      description: 'Descrição',
      html_url: 'https://google.com.br',
      language: 'React',
    },
    {
      id: '3',
      name: 'Repo3',
      description: 'Descrição',
      html_url: 'https://google.com.br',
      language: 'ReactNative',
    },
    {
      id: '4',
      name: 'Repo4',
      description: 'Descrição',
      html_url: 'https://google.com.br',
      language: 'ReactNative',
    },
    {
      id: '5',
      name: 'Repo5',
      description: 'Descrição',
      html_url: 'https://google.com.br',
      language: 'JavaScript',
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilerClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilerClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};
export default RepositoriesPage;
