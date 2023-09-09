import { useEffect, useMemo } from "react";
import useAuth from "services/auth";
import { setUser } from "store/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AccountIcons } from "components/svg";
import { useState } from "react";
export default function UserPfofileAvatarBtn({ link = "/" }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isActive, setIsActive] = useState(false);
  const { getUser } = useAuth({
    userId: isActive,
  });

  function handleRouter() {
    router.push(link);
  }

  useEffect(() => {
    dispatch(setUser(getUser?.data?.user));
  }, [getUser, dispatch]);

  useEffect(() => {
    if (user?.id) {
      setIsActive(false);
    } else {
      setTimeout(() => {
        setIsActive(true);
      }, 1000);
    }
  }, [user]);

  return (
    <div
      onClick={handleRouter}
      className="flex items-center gap-[10px] cursor-pointer"
    >
      <span>
        {user?.image ? (
          <img
            className="w-[44px] h-[44px] rounded-full object-cover border border-border"
            src={user?.image}
            alt={user?.image}
          />
        ) : (
          <AccountIcons classes="w-[30px] tablet:w-[44px]" />
        )}
      </span>
    </div>
  );
}
