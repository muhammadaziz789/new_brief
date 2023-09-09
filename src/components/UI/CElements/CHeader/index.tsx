const CHeader = ({ title, classes = '' }: { title: string, classes?: string }) => {
  return title ? <p className={`border border-black font-medium rounded-[4px] px-2 py-1 mt-2 ${classes}`}>{title}</p> : '';
};

export default CHeader;
