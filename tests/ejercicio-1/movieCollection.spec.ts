import { describe, expect, test } from "vitest";
import { MovieCollection } from '../../src/ejercicio-1/movieCollection';
import { Movie } from '../../src/ejercicio-1/interfaces';

const movie1: Movie = {
  title: 'Star Wars: The Clone Wars',
  year: 2008,
  duration: 98,
};

const movie2: Movie = {
  title: 'Spiderman: Far From Home',
  year: 2019,
  duration: 129,
};

const collection = new MovieCollection([movie1]);

describe('Add item test', () => {
  test('collection.addItem(movie2)', () => {
    expect(collection.getItems()).toEqual([movie1]);
    collection.addItem(movie2);
    expect(collection.getItems()).toEqual([movie1, movie2]);
  });
});

describe('Get items test', () => {
  test('collection.getItems() returns [movie1, movie2]', () => {
    expect(collection.getItems()).toEqual([movie1, movie2]);
  });
  const collection2 = new MovieCollection([]);
  test('collection2.getItems() returns []', () => {
    expect(collection2.getItems()).toEqual([]);
  });
});

describe('Search by name test', () => {
  test('collection.searchByName("Star Wars: The Clone Wars") returns [movie1]', () => {
    expect(collection.searchByName('Star Wars: The Clone Wars')).toEqual([movie1]);
  });
  test('collection.searchByName("Spiderman: Far From Home") returns [movie2]', () => {
    expect(collection.searchByName('Spiderman: Far From Home')).toEqual([movie2]);
  });
  test('collection.searchByName("Spiderman 2") returns []', () => {
    expect(collection.searchByName('Spiderman 2')).toEqual([]);
  });
});

describe('Search by year test', () => {
  test('collection.searchByYear(2008) returns [movie1]', () => {
    expect(collection.searchByYear(2008)).toEqual([movie1]);
  });
  test('collection.searchByYear(2019) returns [movie2]', () => {
    expect(collection.searchByYear(2019)).toEqual([movie2]);
  });
  test('collection.searchByYear(2020) returns []', () => {
    expect(collection.searchByYear(2020)).toEqual([]);
  });
});

describe('Search by seasons test', () => {
  test('collection.searchByDuration(5) returns [movie1]', () => {
    expect(collection.searchByDuration(98)).toEqual([movie1]);
  });
  test('collection.searchByDuration(2) returns [movie2]', () => {
    expect(collection.searchByDuration(129)).toEqual([movie2]);
  });
  test('collection.searchByDuration(3) returns []', () => {
    expect(collection.searchByDuration(320)).toEqual([]);
  });
});