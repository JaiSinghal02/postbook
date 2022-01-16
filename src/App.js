import './App.css';
import Layout from './containers/Layout/Layout'
import Navigation from './containers/Navigation/Navigation';
import Post from './containers/Post/Post';

function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation/>
        <Post/>
      </Layout>
    </div>
  );
}

export default App;
