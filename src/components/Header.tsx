import t from '../language';

const Header: React.FC = () => {
  const DEFAULT_CLASSNAME = 'header';
  return (
    <div className={DEFAULT_CLASSNAME}>
      <h1 className={`${DEFAULT_CLASSNAME}__title`}>
        📏{t.text('app.appHeader')}
      </h1>
    </div>
  );
};

export default Header;
