const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

// const setup = (initialState ={}) => {const store = storeFactory(initialState);const wrapper = shallow(<Input store={store} />);console.log(wrapper.debug());}
