export function AboutCard({ element }) {
  return (
    <div className="flex items-center gap-[40px] flex-col ipod:flex-row">
      <div className="overflow-hidden rounded-[10px] mobile:w-[540px]">
        <img
          src={element?.image}
          alt={element?.image + " img alt"}
          className="object-cover w-full h-[500px] hover:scale-105 duration-200"
        />
      </div>
      <div className="ipod:w-3/4 text-center ipod:text-left">
        <p
          className="text-darkGray leading-[24px]"
          dangerouslySetInnerHTML={{ __html: element?.body }}
        ></p>
        <h4 className="text-2xl font-bold text-blackLight mt-[34px]">
          {element.name}
        </h4>
        <span className="text-lighterGray">{element.position || "job"}</span>
      </div>
    </div>
  );
}
