
import Page from '../../../components/common/Page';

const ReactPage = () => {

  return (
    <>
      <Page.Header
        title="Technologies"
        toolbarActions={[
          {
            fn: () => {},
            label: 'New React',
          },
          {
            fn: () => {},
            label: 'Actions',
            variant: 'secondary',
          },
        ]}
      />
     <h2>Hello React</h2>
    </>
  );
};

export default ReactPage;
