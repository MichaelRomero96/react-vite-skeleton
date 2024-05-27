import Page from '../../components/common/Page';

const HomePage = () => {
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
            fn: () => {},
            label: 'Actions',
            variant: 'secondary',
          },
        ]}
      />
      <h2>Hello Dashboard</h2>
    </>
  );
};

export default HomePage;
