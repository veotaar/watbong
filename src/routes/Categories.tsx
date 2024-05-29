import CategoryButton from '../components/CategoryButton';

function Categories() {
  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <div>
          <h1 className="text-center text-3xl font-bold text-cyan-800">Menu</h1>
          <h2 className="text-center text-sm">Tap on categories to see more.</h2>
        </div>

        <div className="mt-4 flex gap-3 max-[320px]:flex-col">
          <div className="h-64 w-full">
            <CategoryButton
              name="Burgers"
              image="/images/01-burger-classic-burger.jpg"
              target="/burgers"
              description="create your burger"
            />
          </div>
          <div className="h-64 w-full">
            <CategoryButton
              name="Sandwiches"
              image="/images/38-sw-omnimeat-kebab-sandwich-v.jpg"
              target="/sandwiches"
            />
          </div>
        </div>

        <div className="h-64">
          <CategoryButton name="Mac & Cheese" image="/images/24-mc-vegan-mac-cheese.jpg" target="/macandcheese" />
        </div>

        <div className="h-64">
          <CategoryButton name="Mains" image="/images/28-main-chicken-skewers.jpg" target="/mains" />
        </div>

        <div className="h-64">
          <CategoryButton
            name="Snacks"
            image="/images/56-snack-onion-rings.jpg"
            target="/snacks"
            description="fries, spring rolls and more..."
          />
        </div>

        <div className="flex gap-3">
          <div className="h-64 w-full">
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
          <div className="h-64 w-full">
            <CategoryButton
              name="Soft Drinks"
              image="/images/59-soft-coke-zero.jpg"
              target="/softdrinks"
              description="water, coke and more..."
            />
          </div>
          <div className="grid w-full grid-flow-row gap-2">
            <div className="h-full">
              <CategoryButton
                name="Fresh Juice"
                image="/images/22-juice-watermelon-juice.jpg"
                target="/juices"
                description="orange, lime, coconut..."
              />
            </div>
            <div className="h-full">
              <CategoryButton name="Shakes" image="/images/43-shake-mango-shake.jpg" target="/shakes" />
            </div>
          </div>
        </div>

        <div className="h-64">
          <CategoryButton
            name="Coffee & Tea"
            image="/images/13-ct-iced-tea-green.jpg"
            target="/coffeetea"
            description="hot or cold"
          />
        </div>

        <div className="flex gap-3">
          <div className="grid w-full grid-flow-row gap-2">
            <div className="h-full">
              <CategoryButton name="Spirits" target="/spirits" />
            </div>
            <div className="h-full">
              <CategoryButton name="Wines" target="/wines" />
            </div>
          </div>
          <div className="h-64 w-full">
            <CategoryButton name="Beers" target="/beers" />
          </div>
        </div>

        <div className="h-64">
          <CategoryButton name="Cocktails" target="/cocktails" />
        </div>
      </div>
    </>
  );
}

export default Categories;
