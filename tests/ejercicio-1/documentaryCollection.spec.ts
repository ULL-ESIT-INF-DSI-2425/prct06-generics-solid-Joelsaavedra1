import { describe, expect, test } from "vitest";
import { DocumentaryCollection } from '../../src/ejercicio-1/documentaryCollection';
import { Documentary } from '../../src/ejercicio-1/interfaces';

const documentary1: Documentary = {
  title: 'The Social Dilemma',
  year: 2020,
  topic: 'Social Media',
};

const documentary2: Documentary = {
  title: 'Animals United',
  year: 2019,
  topic: 'Animals',
};

const collection = new DocumentaryCollection([documentary1]);

describe('Add item test', () => {
  test('collection.addItem(documentary2)', () => {
    expect(collection.getItems()).toEqual([documentary1]);
    collection.addItem(documentary2);
    expect(collection.getItems()).toEqual([documentary1, documentary2]);
  });
});

describe('Get items test', () => {
  test('collection.getItems() returns [documentary1, documentary2]', () => {
    expect(collection.getItems()).toEqual([documentary1, documentary2]);
  });
  const collection2 = new DocumentaryCollection([]);
  test('collection2.getItems() returns []', () => {
    expect(collection2.getItems()).toEqual([]);
  });
});

describe('Search by name test', () => {
  test('collection.searchByName("The Social Dilemma") returns [documentary1]', () => {
    expect(collection.searchByName('The Social Dilemma')).toEqual([documentary1]);
  });
  test('collection.searchByName("Animals United") returns [documentary2]', () => {
    expect(collection.searchByName('Animals United')).toEqual([documentary2]);
  });
  test('collection.searchByName("Football") returns []', () => {
    expect(collection.searchByName('Football')).toEqual([]);
  });
});

describe('Search by year test', () => {
  test('collection.searchByYear(2008) returns [documentary1]', () => {
    expect(collection.searchByYear(2020)).toEqual([documentary1]);
  });
  test('collection.searchByYear(2019) returns [documentary2]', () => {
    expect(collection.searchByYear(2019)).toEqual([documentary2]);
  });
  test('collection.searchByYear(2020) returns []', () => {
    expect(collection.searchByYear(2022)).toEqual([]);
  });
});

describe('Search by seasons test', () => {
  test('collection.searchByTopic(Social Media) returns [documentary1]', () => {
    expect(collection.searchByTopic('Social Media')).toEqual([documentary1]);
  });
  test('collection.searchByTopic(Animals) returns [documentary2]', () => {
    expect(collection.searchByTopic('Animals')).toEqual([documentary2]);
  });
  test('collection.searchByTopic(Serial Killers) returns []', () => {
    expect(collection.searchByTopic('Serial killers')).toEqual([]);
  });
});