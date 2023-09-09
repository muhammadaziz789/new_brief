import Skeleton from "@mui/material/Skeleton";
export default function CSkeleton({
  isArray = true,
  variant = "rectangular",
  classes,
  skeletonClasses,
  width = "100%",
  height = 450,
  count = 3,
  animation = "wave",
}) {
  return (
    <>
      {isArray ? (
        <div className={`grid gap-[20px] w-full ${classes}`}>
          {Array.from(Array(count)).map((item, ind) => (
            <Skeleton
              key={ind}
              variant={variant}
              width={width}
              height={height}
              className={`w-full bg-[#F4F4F4] rounded-[10px] ${skeletonClasses} relative`}
            />
          ))}
        </div>
      ) : (
        <Skeleton
          variant={variant}
          width={width}
          height={height}
          className={`w-full bg-[#F4F4F4] rounded-[10px] ${skeletonClasses} relative`}
        />
      )}
    </>
  );
}
