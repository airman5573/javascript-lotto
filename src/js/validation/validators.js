import { ERROR_MESSAGE, LOTTO } from '../constants';
import { toInt } from '../utils';
import ValidationResult from './validation-result';

const isEmptyStr = (str) => {
  return `${str}`.trim() === '';
};

export const isNumber = (num) => {
  return /^-?[0-9]+$/g.test(num);
};

export const isPositiveInteger = (num) => {
  return /^[0-9]+$/g.test(num) && toInt(num, 0) !== 0;
};

export const checkEmptyMoney = (money) => {
  if (isEmptyStr(money)) {
    return new ValidationResult(true, ERROR_MESSAGE.EMPTY_MONEY);
  }
  return new ValidationResult(false);
};

export const checkUnderMinMoney = (money) => {
  if (toInt(money, 10) < 1000) {
    return new ValidationResult(true, ERROR_MESSAGE.UNDER_MIN_MONEY);
  }
  return new ValidationResult(false);
};

export const checkOverMaxMoney = (money) => {
  if (toInt(money, 10) > LOTTO.PRICE * LOTTO.MAX_PURCHASEABLE_COUNT) {
    return new ValidationResult(true, ERROR_MESSAGE.OVER_MAX_MONEY);
  }
  return new ValidationResult(false);
};

export const checkNotDevidedByThousandMoney = (money) => {
  if (money % 1000) {
    return new ValidationResult(true, ERROR_MESSAGE.NOT_DIVIDED_BY_THOUSAND);
  }
  return new ValidationResult(false);
};

export const validateMoney = (money) => {
  return [
    checkEmptyMoney(money),
    checkUnderMinMoney(money),
    checkOverMaxMoney(money),
    checkNotDevidedByThousandMoney(money),
  ];
};

export const checkEmptyOfWinningNumbers = (numbers) => {
  const hasError = numbers.some((num) => `${num}`.length === 0);
  if (hasError) {
    return new ValidationResult(true, ERROR_MESSAGE.EMPTY_WINNING_NUMBERS);
  }
  return new ValidationResult(false);
};

export const checkDuplicateOfWinningNumbers = (numbers) => {
  const hasError = new Set(numbers).size !== numbers.length;
  if (hasError) {
    return new ValidationResult(true, ERROR_MESSAGE.DUPLICATE_WINNING_NUMBERS);
  }
  return new ValidationResult(false);
};

export const checkInvalidRangeOfWinningNumbers = (numbers) => {
  const hasError = numbers.some(
    (num) => !isPositiveInteger(num) || num > LOTTO.RANGE.MAX || num < LOTTO.RANGE.MIN
  );
  if (hasError) {
    return new ValidationResult(true, ERROR_MESSAGE.INVALID_WINNING_NUMBER_RANGE);
  }
  return new ValidationResult(false);
};

export const validateWinningNumbers = (numbers) => {
  const results = [
    checkEmptyOfWinningNumbers(numbers),
    checkInvalidRangeOfWinningNumbers(numbers),
    checkDuplicateOfWinningNumbers(numbers),
  ];
  for (let i = 0; i < results.length; i += 1) {
    if (results[i].hasError) return results[i];
  }
  return new ValidationResult(false);
};
