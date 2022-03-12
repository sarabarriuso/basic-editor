import Header from './Header';
import Editor from './editor';

const Dashboard: React.FC = () => {
  const DEFAULT_CLASSNAME = 'dashboard';

  // const loadingData = GetLoadingPlantedTreesData();

  return (
    <div className={DEFAULT_CLASSNAME}>
      <Header />
      <Editor />
    </div>
  );
};

export default Dashboard;
