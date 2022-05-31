import version from '../../package.json';

export const environment = {
  version: version,
  api: {
    baseUrl: 'https://api-nodejs-andom.herokuapp.com',
    ocurrences: {
      base: '/ocurrences',
      byId: '/ocurrences/{id}',
    },
    countOcurrences: {
      base: '/count-ocurrences',
      byId: '/count-ocurrences/{id}',
    },
  }
}
