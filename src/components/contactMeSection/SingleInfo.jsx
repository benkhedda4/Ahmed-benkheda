const SingleInfo = ({ text, Image, link }) => {
  const content = (
    <div className="flex gap-4 items-center justify-start hover:text-blue-600 cursor-pointer">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default SingleInfo;
