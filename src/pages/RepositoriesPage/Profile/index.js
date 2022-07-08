import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/30470257?v=4" />
      <Login>Saulo Coelho</Login>
      <Name>Dev Samurai</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i> &nbsp;&middot; &nbsp;10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} />
        Aplicativos Coelho
      </Data>
      <Data>
        <MdLocationCity size={20} />
        Bauru - SP
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="https://saulocoelho.dev.br">saulocoelho.dev.br</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
