const Main_button = ({ text, href }) => {
  return (
    <a className="bg-orange-500 text-white rounded-full py-2 px-4 w-[250px] text-center" href={href}>
      {text}
    </a>
  );
};

export default Main_button;