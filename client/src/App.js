import { useState, useEffect } from 'react';
import { accessToken, logout, getCurrentUserProfile } from './spotify';
import { catchErrors } from './utlis.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from 'react-router-dom';
import { Login, Profile, TopArtists, TopTracks, Playlists, Playlist } from './pages';
import { GlobalStyle } from './styles';
import styled from 'styled-components/macro';


const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0,0,0                                                                                                                                                                                                                                                                                                                                                    ,.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;
// Scroll to top of page when changing routes
// https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const [token, setToken] = useState(null);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setToken(accessToken);
    }, []);

    return (
        <div className="App">
            <GlobalStyle />

            <header className="App-header">
                {!token ? (
                    <Login />
                ) : (
                      <>
                         <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
                      <Router>

                         <ScrollToTop />
                          <Switch>
                            <Route path="/top-artists">
                                <TopArtists />
                            </Route>
                            <Route path="/top-tracks">
                                 <TopTracks />
                            </Route>
                            <Route path="/playlists/:id">
                                 <Playlist />
                            </Route>
                            <Route path="/playlists">
                                  <Playlists />
                            </Route>
                             <Route path="/">
                                    <Profile />
                            </Route>
                          </Switch>
                      </Router>
                      </>
                )}
            </header>
        </div>
    );
}

export default App;





//function App() {
//    useEffect(() => {
//        const queryString = window.location.search;
//        const urlParams = new URLSearchParams(queryString);
//        const accessToken = urlParams.get('access_token');
//        const refreshToken = urlParams.get('refresh_token');

//        console.log(accessToken);
//        console.log(refreshToken);
//        if (refreshToken) {

////  localhost 3000 is trying to aaccess resources from localhost:8888,
//// to tell the developement server to proxy the unknown requests,
////we can simple set a proxy in package.json
//            fetch(`/refresh_token?refresh_token=${refreshToken}`)
//                .then(res => res.json())
//                .then(data => console.log(data))
//                .catch(err => console.error(err));
//        }

//    }, []);
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//              <a className="App-link" href="http://localhost:8888/login">
//                  Log in to Spotify
//              </a>
//      </header>
//    </div>
//  );
//}


