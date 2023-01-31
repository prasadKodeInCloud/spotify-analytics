const Track = () => {
  return (
    <div>
      <div className="flex flex-wrap md:flex-1 gap-1">
        <div className=" grow  bg-cyan-400 h-52 w-44">01</div>
        <div className=" bg-cyan-200 h-52 w-52 grow">02</div>
        <div className="bg-cyan-400 h-52 basis-1/2 grow">03</div>
      </div>
      <div className="flex flex-wrap md:flex-1 gap-1 pt-1">
        <div className="basis-1/4 grow   bg-cyan-400 h-52">04</div>
        <div className=" bg-cyan-200 h-52 grow">05</div>
      </div>
      <div className="flex flex-wrap md:flex-1 gap-1 pt-1">
        <div className="grow bg-cyan-200 h-52 w-42">06</div>
      </div>
    </div>
  );
};

export default Track;
