import './App.css';
import Category from './components/Category';

function Home() {
  return (
    <>
      <Category type="Reaction" value="80" />
      <Category type="Memory" value="80" />
      <Category type="Verbal" value="80" />
      <Category type="Visual" value="80" />
    </>
  );
}

export default Home;
