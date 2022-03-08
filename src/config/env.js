// @ts-check
/**
 * @param {(keyof SYSTEM_ENV)} key
 * @returns {string}
 */
const getENV = (key) => {
  // eslint-disable-next-line no-process-env
  const value = process.env[key];
  if (!value) {
    throw new Error(`missing env variable: ${key}`);
  }
  return value;
};

/**
 * @typedef {{
 *  PANDADOC_API_KEY: string
 * }} SYSTEM_ENV
 */
/**
 * @returns {SYSTEM_ENV}
 */
const initializeENV = () => {
  return {
    PANDADOC_API_KEY: `API-Key ${getENV('PANDADOC_API_KEY')}`,
  };
};

const SYSTEM_ENV = initializeENV();
module.exports = { SYSTEM_ENV };
