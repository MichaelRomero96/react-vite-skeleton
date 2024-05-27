import Page from '../../components/common/Page';
import useStore from '../../store';

const HomePage = () => {
  const count = useStore((state) => state.count);
  return (
    <>
      <Page.Header
        title="Dashboard"
        toolbarActions={[
          {
            fn: () => {},
            label: 'New Vite',
          },
          {
            fn: () => useStore.getState().inc(),
            label: 'Increase count',
            variant: 'secondary',
          },
        ]}
      />
      <h2>Hello Dashboard The store count is: {count}</h2>
    </>
  );
};

export default HomePage;
