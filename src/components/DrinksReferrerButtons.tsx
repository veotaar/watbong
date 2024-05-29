import { SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';

interface DrinksReferrerButtonsProps {
  referrer: string;
  refName: string;
}

function DrinksReferrerButtons({ referrer, refName }: DrinksReferrerButtonsProps) {
  return (
    <>
      <h2 className="mb-2 text-xl font-bold text-cyan-800">Related Pages:</h2>
      <div className="flex flex-col items-baseline gap-2">
        <Link className="btn btn-accent" to="/softdrinks" state={{ referrer, refName }}>
          <p>Soft Drinks</p>
          <SlArrowRight />
        </Link>
        <Link className="btn btn-accent" to="/juices" state={{ referrer, refName }}>
          <p>Fresh Juice</p>
          <SlArrowRight />
        </Link>
      </div>
    </>
  );
}

export default DrinksReferrerButtons;
