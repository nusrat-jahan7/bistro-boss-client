/* eslint-disable react/prop-types */
const Cover = ({img, title, description}) => {
  return (
    <div className="p-32 pt-44 bg-fixed" style={{backgroundImage: `url("${img}")`}}>
      <div className="uppercase text-center space-y-3 bg-black/60 text-white py-20">
        <h1 className="text-4xl font-semibold"> {title} </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cover;
