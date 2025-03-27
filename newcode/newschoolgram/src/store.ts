import NS from 'netschoolapi';

interface Store {
  user: NS | null;
}

const store: Store = {
  user: null,
};

export default store;