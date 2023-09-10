const Business = ({ text, name, handleChange, initName }) => {
  return (
    <div className="w-full">
      {text ? <p>{text}</p> : ""}

      <textarea
        className="border border-main rounded-[4px] w-full mt-2 p-2"
        rows={3}
        onChange={(e) => handleChange(initName, name, e.target.value)}
      />
    </div>
  );
};

export default Business;
