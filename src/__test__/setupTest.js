import '@testing-library/jest-dom'
require('jest-fetch-mock').enableFetchMocks();
import fetchMock from 'jest-fetch-mock'

global.fetch = fetchMock