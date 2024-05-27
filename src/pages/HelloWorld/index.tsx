import Page from '../../components/common/Page';
import useStore from '../../store';

const HelloWorldPage = () => {
  const count = useStore((state) => state.count);
  return (
    <>
      <Page.Header
        title="Hello World Page"
        toolbarActions={[
          {
            fn: () => {},
            label: 'New Hello world',
          },
          {
            fn: () => useStore.getState().inc(),
            label: 'Increase count',
            variant: 'secondary',
          },
        ]}
      />
      <h2>Hello World The store count is: {count}</h2>
    </>
  );
};

export default HelloWorldPage;
