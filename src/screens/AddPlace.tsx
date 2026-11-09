import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Categories, Dialog, Field, HoursTable, Page, Title } from '../components';
import { FormError, FormHeading, OpinionField, PhotoTile } from '../FormControls';
import { defaultHours } from '../data';
import { validatePlace } from '../domain';
import { useStore } from '../store';
import { PriceSelector } from './Detail';
import type { Category, RootStack } from '../types';

const allCategories: Category[] = ['Parques', 'Restaurantes', 'Natureza', 'Esportes', 'Cultura'];
export function AddPlaceScreen({ navigation }: NativeStackScreenProps<RootStack, 'AddPlace'>) {
  const { addPlace } = useStore();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string>();
  const [price, setPrice] = useState(1);
  const [hours, setHours] = useState(defaultHours);
  const [categories, setCategories] = useState<Category[]>(allCategories);
  const [more, setMore] = useState(false);
  const [nameDialog, setNameDialog] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const submitted = useRef(false);
  const selectCategory = (category: Category | 'Todos') => setCategories(current => category === 'Todos' ? [...allCategories] : current.includes(category) ? current.filter(c => c !== category) : [...current, category]);
  const prepare = () => {
    const validation = validatePlace(description, hours, categories);
    setError(validation);
    if (!validation) setNameDialog(true);
  };
  const save = () => {
    if (!name.trim()) { setNameError('Dê um nome ao lugar para encontrá-lo depois.'); return; }
    if (submitted.current) return;
    submitted.current = true;
    const id = addPlace({ name: name.trim(), description: description.trim(), image: image ?? '02333.png', price, hours, categories, category: categories[0], rating: 0, phone: '(17) 99999-0000', instagram: '@explorar' });
    setNameDialog(false);
    navigation.replace('Detail', { id });
  };
  return <Page><Title style={{ marginBottom: 20 }}>{'Adicionando\nponto'}</Title>
    <PhotoTile value={image} onChange={setImage} label="Adicionar foto do ponto" />
    <FormHeading>Descrição</FormHeading><OpinionField label="Descrição do ponto" value={description} onChange={setDescription} />
    <FormHeading>Quanto você pagou?</FormHeading><PriceSelector value={price} onChange={setPrice} />
    <FormHeading>Horário de Funcionamento</FormHeading><HoursTable hours={hours} onChange={setHours} />
    <FormHeading>Categorias:</FormHeading><Categories selected={categories} onSelect={selectCategory} more={() => setMore(true)} />
    <FormError message={error} /><Button title="ADICIONAR PONTO" onPress={prepare} style={{ marginTop: 28 }} />
    <Dialog visible={more} title="Mais categorias" onClose={() => setMore(false)}><Categories showAll={false} selected={categories} onSelect={selectCategory} /></Dialog>
    <Dialog visible={nameDialog} title="Como se chama este lugar?" onClose={() => setNameDialog(false)}><Field label="Nome do lugar" value={name} onChange={value => { setName(value); setNameError(''); }} placeholder="Ex.: Praça do bairro" /><FormError message={nameError} /><View style={{ marginTop: 12 }}><Button title="SALVAR PONTO" onPress={save} /></View></Dialog>
  </Page>;
}
