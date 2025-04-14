export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-6/12">
            <img
              src="/assets/images/coconut-still-life.jpg"
              alt="image"
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Coconut.
            </h2>
            <p className="mt-6 text-gray-600">
              Coconuts are the Swiss Army knives of the fruit world—tough on the
              outside, party on the inside. Grown mostly in tropical regions,
              these guys come with a built-in drink, a snack, and craft
              supplies. The outer husk gives us coir, which is just a fancy name
              for stringy stuff that turns into ropes, doormats, or even stylish
              plant hangers.
            </p>
            <p className="mt-4 text-gray-600">
              Crack one open, and boom—snack time! The white flesh is delicious
              whether you eat it raw or turn it into oil for cooking or
              slathering on your skin like a tropical spa treatment. And let’s
              not forget coconut water, nature’s sports drink, ideal for
              pretending you’re healthy after a plate of fries.
            </p>
            <p className="mt-4 text-gray-600">
              Beyond being edible multitools, coconuts also crash religious
              ceremonies, beauty routines, and even furniture making. In many
              cultures, they’re symbols of luck and purity—who knew a hairy
              fruit could have such a fan following? Long story short: coconuts
              are weird, wonderful, and totally awesome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
