import { Link } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';

interface GoBackButtonProps {
  displayImageInfoText?: boolean;
}

function GoBackButton({ displayImageInfoText = true }: GoBackButtonProps) {
  return (
    <div className="mb-4 flex flex-col items-center">
      <Link to="/menu" className="btn btn-primary">
        <SlArrowLeft />
        <p>Go back to main menu</p>
      </Link>
      {displayImageInfoText && <p className="text-sm">Tap on images to enlarge / minimize.</p>}
    </div>
  );
}

export default GoBackButton;
