import React from 'react';

import { Container, Selector, Cleaner } from './styles';

const Filter = () => {
  const langs = [
    { name: 'HTML', count: 5, color: '#f1c40f' },
    { name: 'ReactNative', count: 5, color: '#95a5a6' },
    { name: 'Python', count: 10, color: '#3498db' },
    { name: 'React', count: 8, color: '#2ecc71' },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLocaleLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
};
export default Filter;
