import Feed from '@components/Feed';
import Carousel from '@components/Carousel';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Carousel/>
      <h1 className="head_text text_center">
        Header 1
        <br /> 
        {/* className="max-md:hidden"  */}
        <span className="orange_gradient text-center">AI-Powered </span>
      </h1>
      <p className="desc text-center">loren ipsum</p>
      <Feed />
    </section>
  )
}

export default Home;