import test from 'node:test';
import assert from 'node:assert/strict';
import { averageRating, selectReviews, validateHours, validatePlace, validateReview } from '../src/domain.ts';
import { defaultHours, initialPlaces } from '../src/data.ts';
import { appearanceFor, defaultPreferences, restorePreferences } from '../src/preferences.ts';
import type { Review } from '../src/types.ts';

test('novo ponto exige descrição, categoria e horários válidos apenas nos dias abertos', () => {
  assert.ok(validatePlace(' ', defaultHours(), ['Parques']));
  assert.ok(validatePlace('Uma praça', defaultHours(), []));
  assert.equal(validatePlace('Uma praça', defaultHours(), ['Parques']), '');
  const hours = defaultHours();
  hours[0].from = '25:00';
  assert.ok(validateHours(hours));
  hours[0].open = false;
  assert.equal(validateHours(hours), '');
  hours[1].until = '12:99';
  assert.ok(validateHours(hours));
});
test('avaliar exige uma nota inteira de 1 a 5 e comentário preenchido', () => {
  for (const rating of [0, 6, -1, 4.5, NaN]) assert.ok(validateReview(rating, 'Gostei do lugar'));
  assert.ok(validateReview(5, '  '));
  assert.equal(validateReview(1, 'Poderia melhorar'), '');
  assert.equal(validateReview(5, 'Gostei do lugar'), '');
});
test('nota do lugar é recalculada com precisão de uma casa decimal', () => {
  assert.equal(averageRating([]), 0);
  assert.equal(averageRating([{ rating: 5 }, { rating: 4 }, { rating: 1 }]), 3.3);
});
test('minhas avaliações combina autoria, busca, categorias e ordenação por data da avaliação', () => {
  const reviews: Review[] = [
    { id: 'a', placeId: 'ibirapuera', author: 'Eu', text: 'Árvores bonitas', mine: true, rating: 5, createdAt: 10 },
    { id: 'b', placeId: 'vitinho', author: 'Eu', text: 'Diversão', mine: true, rating: 4, createdAt: 30 },
    { id: 'c', placeId: 'vitinho', author: 'Outro', text: 'Diversão', mine: false, rating: 5, createdAt: 50 },
    { id: 'd', placeId: 'missing', author: 'Eu', text: 'Lugar removido', mine: true, rating: 5 },
  ];
  assert.deepEqual(selectReviews(reviews, initialPlaces, '', 'Todos').map(r => r.id), ['b', 'a']);
  assert.deepEqual(selectReviews(reviews, initialPlaces, 'arvores', 'Natureza').map(r => r.id), ['a']);
  assert.deepEqual(selectReviews(reviews, initialPlaces, '', 'Todos', 'oldest').map(r => r.id), ['a', 'b']);
  assert.deepEqual(selectReviews(reviews, initialPlaces, 'parque', 'Parques').map(r => r.id), []);
  assert.equal(reviews.length, 4);
});
test('preferências antigas ou inválidas recebem valores compatíveis sem descartar opções válidas', () => {
  assert.deepEqual(restorePreferences(), defaultPreferences);
  assert.deepEqual(restorePreferences({ location: false }), { ...defaultPreferences, location: false });
  assert.equal(restorePreferences({ appearance: 'invalid' as 'dark' }).appearance, 'system');
  assert.equal(restorePreferences({ textSize: 'invalid' as 'large' }).textSize, 'standard');
});
test('aparência segue o sistema, permite substituição explícita e aplica tamanho e contraste', () => {
  assert.equal(appearanceFor(defaultPreferences, 'dark').dark, true);
  assert.equal(appearanceFor({ ...defaultPreferences, appearance: 'light' }, 'dark').dark, false);
  assert.equal(appearanceFor({ ...defaultPreferences, appearance: 'dark' }, 'light').dark, true);
  assert.equal(appearanceFor({ ...defaultPreferences, textSize: 'large' }, 'light').fontScale, 1.3);
  assert.notEqual(appearanceFor({ ...defaultPreferences, highContrast: true }, 'light').palette.border, appearanceFor(defaultPreferences, 'light').palette.border);
});
