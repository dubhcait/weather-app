import { dataTracker } from './dataTracker'

const testDataTracker = new dataTracker;
testDataTracker.insert([3, 4, 5, 10, 3, -2])

test("Test showMin", () => {
  expect(testDataTracker.showMin()).toEqual(-2);
});

test("Test showMax", () => {
  expect(testDataTracker.showMax()).toEqual(10);
});

test("Test showMean", () => {
  expect(testDataTracker.showMean()).toEqual(3.83);
});

test("Test showMode", () => {
  expect(testDataTracker.showMode()).toEqual(3);
});