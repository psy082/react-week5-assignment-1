const initialState = {
  addressList: [],
  categoryList: [],
  selectedAddress: {},
  selectedCategory: {},
  restaurants: [],
};

const addressList = [
  { id: '1', name: '서울' },
  { id: '2', name: '강원도' },
  { id: '3', name: '대전' },
];

const categoryList = [
  { id: '1', name: '한식' },
  { id: '2', name: '중식' },
  { id: '3', name: '일식' },
];

const containAddressState = {
  addressList,
  categoryList: [],
  selectedAddress: '',
  selectedCategory: '',
  restaurants: [],
};

const containCategoryState = {
  addressList: [],
  categoryList,
  selectedAddress: '',
  selectedCategory: '',
  restaurants: [],
};

const restaurants = [
  {
    id: 1,
    categoryId: 1,
    name: '양천주가',
    address: '서울 강남구',
  },
];

const selectedAddress = {
  id: '1',
  name: '서울',
};

const selectedCategory = {
  id: '1',
  name: '한식',
};

export {
  initialState,
  addressList,
  categoryList,
  containAddressState,
  containCategoryState,
  restaurants,
  selectedAddress,
  selectedCategory,
};
