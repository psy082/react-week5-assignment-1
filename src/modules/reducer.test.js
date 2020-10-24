import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer from './reducer';
import {
  updateRegion,
  updateCategory,
  loadRegions,
} from './actions';
import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

function mockFetch(jsonData) {
  global.fetch = jest.fn(async () => ({
    json: async () => jsonData,
  }));
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('reducer', () => {
  it('updateRegions', () => {
    const state = reducer({
      selected: {
        region: '',
      },
    }, updateRegion('서울'));

    expect(state.selected.region).toBe('서울');
  });

  it('updateCategory', () => {
    const state = reducer({
      selected: {
        category: '',
      },
    }, updateCategory('한식'));

    expect(state.selected.category).toBe('한식');
  });

  it('setRegions', () => {
    const state = reducer({
      regions: [],
    }, {
      type: 'setRegions',
      payload: { regions },
    });

    expect(state.regions).toBe(regions);
  });

  it('setCategories', () => {
    const state = reducer({
      categories: [],
    }, {
      type: 'setCategories',
      payload: { categories },
    });

    expect(state.categories).toBe(categories);
  });

  it('setRestaurants', () => {
    const state = reducer({
      restaurants: [],
    }, {
      type: 'setRestaurants',
      payload: { restaurants },
    });

    expect(state.restaurants).toBe(restaurants);
  });

  context('without state', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: undefined });

      expect(state.regions).toStrictEqual([]);
      expect(state.categories).toStrictEqual([]);
      expect(state.restaurants).toStrictEqual([]);
    });
  });

  it('loadRegions', () => {
    mockFetch(regions);

    const store = mockStore({});

    store.dispatch(loadRegions()).then(() => {
      expect(store.getActions()).toStrictEqual([{
        type: 'setRegions',
        payload: { regions },
      }]);
    });
  });
});
