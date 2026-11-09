import test from 'node:test';
import assert from 'node:assert/strict';
import { selectPlaces, validateAuth } from '../src/domain.ts';
import { initialPlaces } from '../src/data.ts';

test('busca ignora acentos e caixa sem alterar os dados de origem', () => {
  const ids = initialPlaces.map(p => p.id);
  assert.deepEqual(selectPlaces(initialPlaces, 'PAO', 'Todos').map(p => p.id), ['pao-de-acucar']);
  assert.deepEqual(initialPlaces.map(p => p.id), ids);
});
test('categoria considera todas as categorias do lugar e combina com busca', () => {
  assert.deepEqual(selectPlaces(initialPlaces, 'kart', 'Esportes').map(p => p.id), ['kartodromo']);
  assert.equal(selectPlaces(initialPlaces, 'kart', 'Restaurantes').length, 0);
});
test('ordenação cronológica e alfabética não modifica o catálogo', () => {
  assert.equal(selectPlaces(initialPlaces, '', 'Todos', 'oldest')[0].id, 'kartodromo');
  assert.equal(selectPlaces(initialPlaces, '', 'Todos', 'newest')[0].id, 'ibirapuera');
  const ascending = selectPlaces(initialPlaces, '', 'Todos', 'az').map(p => p.name);
  assert.deepEqual(selectPlaces(initialPlaces, '', 'Todos', 'za').map(p => p.name), ascending.toReversed());
});
test('entrada mockada exige usuário e senha sem exigir credenciais reais', () => {
  assert.ok(validateAuth('', 'senha'));
  assert.ok(validateAuth('joao', ''));
  assert.equal(validateAuth('joao', 'qualquer senha'), '');
});
test('cadastro exige confirmação, senha mínima e aceite dos termos', () => {
  assert.ok(validateAuth('joao', '123', '123', true));
  assert.ok(validateAuth('joao', '123456', '654321', true));
  assert.ok(validateAuth('joao', '123456', '123456', false));
  assert.equal(validateAuth('joao', '123456', '123456', true), '');
});
