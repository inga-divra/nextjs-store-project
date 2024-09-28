const AboutPage = () => {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        We love
        <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
          quality
        </span>
      </h1>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        Our mission is to provide you with high-quality products that make your
        life easier and better. Every item in our store has been carefully
        selected and crafted with precision to meet the highest standards. We
        believe in delivering only the best to our customers, ensuring that
        every experience with our store is one of satisfaction and joy.
      </p>
    </section>
  );
};

export default AboutPage;
