/* eslint-disable react/prop-types */

const SectionTitle = ({subHeading, heading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center mt-16 mb-3">
            <p className="text-yellow-500 pb-2">--- {subHeading} ---</p>
            <h2 className="text-3xl uppercase border-y-4 py-4"> {heading} </h2>
        </div>
    );
};

export default SectionTitle;