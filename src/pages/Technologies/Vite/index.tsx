
import Page from '../../../components/common/Page';

const VitePage = () => {

  return (
    <>
      <Page.Header
        title="Technologies"
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
     <h2>Hello Vite</h2>
    </>
  );
};

export default VitePage;
