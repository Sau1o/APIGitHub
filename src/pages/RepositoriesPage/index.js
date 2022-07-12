import React, { useState, useEffect } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Loading, Container, Sidebar, Main } from './styles';

import { getUser, getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const [user, setUser] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse] = await Promise.all([getUser('Sau1o')]);
      setUser(userResponse.data);

      setLoading(false);
    };

    loadData();
  }, []);

  // const user = {
  //   login: 'Sau1o',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/30470257?v=4',
  //   name: 'Saulo Coelho',
  //   followers: 26,
  //   following: 19,
  //   company: null,
  //   blog: 'https://google.com.br',
  //   location: 'Bauru - SP',
  // };

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

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

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
