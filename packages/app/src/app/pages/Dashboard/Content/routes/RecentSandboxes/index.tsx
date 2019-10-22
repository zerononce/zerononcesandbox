import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useOvermind } from 'app/overmind';
import { Content as Sandboxes } from '../../Sandboxes';
import CreateNewSandbox from '../../CreateNewSandbox';

const RecentSandboxes: React.FC = () => {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.dashboard_new.recentSandboxesMounted();
  }, [actions.dashboard_new]);

  let content;
  if (state.dashboard_new.error) {
    content = <div>Error!</div>;
  } else {
    content = (
      <Sandboxes
        isLoading={false}
        Header="Recent Sandboxes"
        ExtraElement={({ style }) => (
          <CreateNewSandbox
            mostUsedSandboxTemplate={state.dashboard_new.mostUsedTemplate}
            style={style}
          />
        )}
        hideFilters
        sandboxes={state.dashboard_new.currentSandboxes.slice(0, 20)}
        page="recent"
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Recent Sandboxes - CodeSandbox</title>
      </Helmet>
      {content}
    </>
  );
};

export default RecentSandboxes;
