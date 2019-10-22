// @ts-check
import React, { useState, useEffect } from 'react';
import RightIcon from 'react-icons/lib/md/keyboard-arrow-right';
import LeftIcon from 'react-icons/lib/md/keyboard-arrow-left';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Navigation } from 'app/pages/common/Navigation';
import { SignInButton } from 'app/pages/common/SignInButton';

import { useOvermind } from 'app/overmind';
import SidebarContents from './Sidebar';
import Content from './Content';
import {
  Container,
  Centered,
  Content as ContentContainer,
  LoggedInContainer,
  LoggedInTitle,
  Sidebar,
  NavigationContainer,
  ShowSidebarButton,
  OffsettedLogo,
} from './elements';

type DashboardProps = RouteComponentProps;

const Dashboard: React.FC<DashboardProps> = ({ history }) => {
  const { state } = useOvermind();
  const [showSidebar, setShowsidebar] = useState(false);

  useEffect(
    () =>
      history.listen(({ state: routerState }) => {
        if (!!routerState && routerState.from === 'sandboxSearchFocused') {
          return;
        }

        setShowsidebar(false);
      }),
    [history]
  );

  let DashboardContent = (
    <>
      <Sidebar active={showSidebar}>
        <SidebarContents />
        <ShowSidebarButton onClick={() => setShowsidebar(!showSidebar)}>
          {showSidebar ? (
            <LeftIcon style={{ color: 'white' }} />
          ) : (
            <RightIcon style={{ color: 'white' }} />
          )}
        </ShowSidebarButton>
      </Sidebar>

      <ContentContainer>
        <Content />
      </ContentContainer>
    </>
  );

  if (!state.hasLogIn) {
    DashboardContent = (
      <Container>
        <Centered>
          <LoggedInContainer>
            <OffsettedLogo />
            <LoggedInTitle>Sign in to CodeSandbox</LoggedInTitle>

            <SignInButton style={{ fontSize: '1rem' }} />
          </LoggedInContainer>
        </Centered>
      </Container>
    );
  }

  return (
    <Container>
      <NavigationContainer>
        <Navigation searchNoInput title="Dashboard" />
      </NavigationContainer>

      <div style={{ display: 'flex', overflow: 'hidden' }}>
        {DashboardContent}
      </div>
    </Container>
  );
};

export default withRouter(Dashboard);
