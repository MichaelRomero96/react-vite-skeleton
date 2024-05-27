import Page from '../../components/common/Page';

const HelloWorldPage = () => {
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
            fn: () => {},
            label: 'Actions',
            variant: 'secondary',
          },
        ]}
      />
      <h2>Hello World</h2>
    </>
  );
};

export default HelloWorldPage;
