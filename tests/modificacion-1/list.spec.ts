import { describe, expect, test } from "vitest";
import { MyList } from "../../src/modificacion-p6/list";

const liststring1 = new MyList(["a", "b", "c"]);
const liststring2 = new MyList(["d", "e", "f"]);

describe("myPush test", () => {
  const list1 = new MyList([1, 2, 3]);
  test("list1.append(list2) should return [1, 2, 3, 4, 5, 6]", () => {
    list1.myPush(4);
    expect(list1).toEqual(new MyList([1, 2, 3, 4]));
  });
});

describe("myPop test", () => {
  const list1 = new MyList([1, 2, 3]);
  test("list1.append(list2) should return [1, 2, 3, 4, 5, 6]", () => {
    list1.myPop();
    expect(list1).toEqual(new MyList([1, 2, undefined]));
  });
  const listempty = new MyList([]);
  test("liststring1.append(liststring2) should return ['a', 'b', 'c', 'd', 'e', 'f']", () => {
    expect(listempty.myPop()).toBe(undefined);
  });
});

describe("Append test", () => {
  const list1 = new MyList([1, 2, 3]);
  const list2 = new MyList([4, 5, 6]);
  test("list1.append(list2) should return [1, 2, 3, 4, 5, 6]", () => {
    expect(list1.append(list2)).toEqual(new MyList([1, 2, 3, 4, 5, 6]));
  });
  test("liststring1.append(liststring2) should return ['a', 'b', 'c', 'd', 'e', 'f']", () => {
    expect(liststring1.append(liststring2)).toEqual(
      new MyList(["a", "b", "c", "d", "e", "f"]),
    );
  });
});

describe("Concatenate test", () => {
  test("aux_list.concatenate([list1, list2]) should return [1, 2, 3, 4, 5, 6]", () => {
    const aux_list: MyList<number> = new MyList();
    const list1 = new MyList([1, 2, 3]);
    const list2 = new MyList([4, 5, 6]);
    expect(aux_list.concatenate(list1, list2)).toEqual(
      new MyList([1, 2, 3, 4, 5, 6]),
    );
  });
});

describe("Filter test", () => {
  const list2 = new MyList([4, 5, 6]);
  test("list2.filter() should return [4, 6]", () => {
    expect(list2.filter((num) => num % 2 === 0)).toEqual(new MyList([4, 6]));
  });
});

describe("Length test", () => {
  const list2 = new MyList([4, 5, 6]);
  test("list2.length() should return 3", () => {
    expect(list2.length()).toBe(3);
  });
});

describe("Map test", () => {
  test("list2.length() should return 3", () => {
    const auxlist = new MyList([1, 2, 3]);
    const mapped = auxlist.map((num) => num * 2);
    expect(mapped).toEqual(new MyList([2, 4, 6]));
  });
});

describe("Reduce test", () => {
  test("list2.length() should return 3", () => {
    const auxlist = new MyList([1, 2, 3]);
    expect(auxlist.reduce((acc, num) => acc + num, 0)).toBe(6);
  });
});

describe("Reverse test", () => {
  test("list2.length() should return 3", () => {
    const auxlist = new MyList([1, 2, 3]);
    expect(auxlist.reverse()).toEqual(new MyList([3, 2, 1]));
  });
});

describe("ForEach test", () => {
  test("list2.length() should return 3", () => {
    const auxlist = new MyList([1, 2, 3]);
    auxlist.forEach((num) => num * 2);
    expect(auxlist).toEqual(new MyList([2, 4, 6]));
  });
});

