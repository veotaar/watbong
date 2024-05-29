import GoBackButton from '../components/GoBackButton';
import MenuItemList from '../components/MenuItemsList';

interface PageContentProps {
  hasImages?: boolean;
  title: string;
  category: string;
}

function PageContent({ hasImages = true, title, category }: PageContentProps) {
  return (
    <div className="mb-4">
      <GoBackButton displayImageInfoText={hasImages} />
      <h1 className="mb-2 text-center text-2xl font-bold text-cyan-800">{title}</h1>
      <MenuItemList category={category} />
    </div>
  );
}

export default PageContent;
