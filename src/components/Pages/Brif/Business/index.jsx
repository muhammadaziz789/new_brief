const Business = ({ text }) => {
  return (
    <div className="w-full">
      {text ? <p>{text}</p> : ""}

      <textarea
        className="border border-main rounded-[4px] w-full mt-2 p-2"
        rows={3}
      />
    </div>
  );
};

export default Business;
