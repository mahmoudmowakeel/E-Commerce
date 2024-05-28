function AnimatedTitle({ title }) {
  return (
    <div className="animated-title-black pt-10 md:pt-28 text-[35px] md:text-[54px] ">
      <ul className="flex justify-between space-x-52 uppercase">
        <li className="hover:text-white">{title}</li>
        <li className="hover:text-white">{title}</li>
        <li className="hover:text-white">{title}</li>
        <li className="hover:text-white">{title}</li>
        <li className="hover:text-white">{title}</li>
        <li className="hover:text-white">{title}</li>
        <li className="hover:text-white">{title}</li>
        <li className="hover:text-white">{title}</li>
      </ul>
    </div>
  );
}

export default AnimatedTitle;
