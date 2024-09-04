import "../index.css";
function BlogCard({ image, title, description }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="row">
          <div className="col">
            <img className="w-full" src={image} alt="blog image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 bg-black text-white">
                {title}
              </div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="inline-block bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
