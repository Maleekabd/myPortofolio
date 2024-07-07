const Tag = ({ name }) => {
  return (
    <div className="inline-block m-1 w-auto h-auto">
      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-1 text-sm text-purple-700">
        {name}
      </span>
    </div>
  );
};

export default Tag;
