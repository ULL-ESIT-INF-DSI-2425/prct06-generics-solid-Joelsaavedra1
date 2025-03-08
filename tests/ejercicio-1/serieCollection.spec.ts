import { describe, expect, test } from "vitest";
import { SerieCollection } from '../../src/ejercicio-1/serieCollection';
import { Serie } from '../../src/ejercicio-1/interfaces';

const serie1: Serie = {
  title: 'Breaking Bad',
  year: 2008,
  seasons: 5,
};

const serie2: Serie = {
  title: 'The Mandalorian',
  year: 2019,
  seasons: 2,
};

const collection = new SerieCollection([serie1]);

describe('Add item test', () => {
  test('collection.addItem(serie2)', () => {
    expect(collection.getItems()).toEqual([serie1]);
    collection.addItem(serie2);
    expect(collection.getItems()).toEqual([serie1, serie2]);
  });
});

describe('Get items test', () => {
  test('collection.getItems() returns [serie1, serie2]', () => {
    expect(collection.getItems()).toEqual([serie1, serie2]);
  });
  const collection2 = new SerieCollection([]);
  test('collection2.getItems() returns []', () => {
    expect(collection2.getItems()).toEqual([]);
  });
});

describe('Search by name test', () => {
  test('collection.searchByName("Breaking Bad") returns [serie1]', () => {
    expect(collection.searchByName('Breaking Bad')).toEqual([serie1]);
  });
  test('collection.searchByName("The Mandalorian") returns [serie2]', () => {
    expect(collection.searchByName('The Mandalorian')).toEqual([serie2]);
  });
  test('collection.searchByName("The Simpsons") returns []', () => {
    expect(collection.searchByName('The Simpsons')).toEqual([]);
  });
});

describe('Search by year test', () => {
  test('collection.searchByYear(2008) returns [serie1]', () => {
    expect(collection.searchByYear(2008)).toEqual([serie1]);
  });
  test('collection.searchByYear(2019) returns [serie2]', () => {
    expect(collection.searchByYear(2019)).toEqual([serie2]);
  });
  test('collection.searchByYear(2020) returns []', () => {
    expect(collection.searchByYear(2020)).toEqual([]);
  });
});

describe('Search by seasons test', () => {
  test('collection.searchBySeasons(5) returns [serie1]', () => {
    expect(collection.searchBySeasons(5)).toEqual([serie1]);
  });
  test('collection.searchBySeasons(2) returns [serie2]', () => {
    expect(collection.searchBySeasons(2)).toEqual([serie2]);
  });
  test('collection.searchBySeasons(3) returns []', () => {
    expect(collection.searchBySeasons(3)).toEqual([]);
  });
});