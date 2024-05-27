import data from '../data/data';
import CategoryButton from '../components/CategoryButton';

function Categories() {
  return (
    <>
      {/* <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input type="checkbox" value="coffee" className="theme-controller toggle" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
      <hr /> */}

      <div className="w-full p-3">
        <h1 className="text-center text-3xl font-semibold">Menu</h1>
        <h2 className="text-center">Tap on categories to see more.</h2>

        <div className="mt-4 flex gap-3">
          <div className="w-full">
            <CategoryButton
              name="Burgers"
              image="/images/01-burger-classic-burger.jpg"
              target="/burgers"
              description="create your burger"
            />
          </div>
          <div className="w-full">
            <CategoryButton
              name="Sandwiches"
              image="/images/38-sw-omnimeat-kebab-sandwich-v.jpg"
              target="/sandwiches"
            />
          </div>
        </div>

        <CategoryButton name="Mac & Cheese" image="/images/24-mc-vegan-mac-cheese.jpg" target="/macandcheese" />
        <CategoryButton name="Mains" image="/images/28-main-chicken-skewers.jpg" target="/mains" />
        <CategoryButton
          name="Snacks"
          image="/images/56-snack-onion-rings.jpg"
          target="/snacks"
          description="fries, spring rolls and more..."
        />

        <div className="flex gap-3">
          <div className="w-full">
            <CategoryButton
              name="Soups"
              image="/images/64-soup-lentil-soup.jpg"
              target="/soups"
              description="lentil and tomato"
            />
          </div>
          <div className="w-full">
            <CategoryButton name="Desserts" image="/images/15-dessert-chocolate-brownie.jpg" target="/desserts" />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-full">
            <CategoryButton
              name="Soft Drinks"
              image="/images/59-soft-coke-zero.jpg"
              target="/softdrinks"
              description="water, coke and more..."
            />
          </div>
          <div className="w-full">
            <CategoryButton
              name="Fresh Juice"
              image="/images/22-juice-watermelon-juice.jpg"
              target="/juices"
              description="orange, lime, coconut..."
            />
          </div>
        </div>
      </div>

      {data
        .filter((item) => item.category === 'juices')
        .map((item) => (
          <div className="m-2 border border-base-content p-2" key={item.id}>
            <img src={item.image} />
            <p>id: {item.id}</p>
            <p>category: {item.category}</p>
            <p>item: {item.itemName}</p>
            <p>description: {item.description ? item.description : 'no description'}</p>
            <p>{`image name: ${item.image ? item.image : 'no image'}`}</p>
            <p>isVegan: {item.isVegan ? 'vegan' : 'not specified'}</p>
            <p>price: {item.price ? item.price : 'no price'}</p>
          </div>
        ))}
    </>
  );
}

export default Categories;
