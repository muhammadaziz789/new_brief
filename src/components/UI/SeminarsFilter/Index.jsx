import { Container } from "@mui/material";
import cls from "./style.module.scss";
import CBreadCrumb from "components/UI/CBreadCrumb";
import CInputGenerator from "components/UI/CInputGenerator";
import { SearchIcon, FilterIcon } from "components/svg";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useDebounce from "hooks/useDebounce";
import OptimizeQuery from "utils/optimizeQuery";
import {
  ClearRounded,
  KeyboardArrowUpRounded,
  KeyboardArrowDownRounded,
} from "@mui/icons-material";
export default function SeminarsFilter({ title = "title", type = "course" }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const queries = { ...router.query };

  const handleSearch = useDebounce((search) => {
    const prmt = { [type]: search, status: "search" };

    handleRouterActions(prmt);
  }, 700);

  const handleSort = useDebounce(() => {
    const prmt = {
      [type]: queries[type + "_sort"] == "price" ? "-price" : "price",
      status: "sort",
    };

    handleRouterActions(prmt);
  }, 0);

  const handleClearFilter = () => {
    const prmt = {
      [type]: "",
      status: "sort",
    };

    handleRouterActions(prmt);
  };

  function handleRouterActions(props) {
    if (props.status === "search") {
      queries[type + "_search"] = props[type];
    }
    if (props.status === "sort") {
      queries[type + "_sort"] = props[type];
    }

    router.push({
      path: router.pathname,
      query: { ...OptimizeQuery(queries) },
    });
  }

  return (
    <div className={cls.wrapper}>
      <Container>
        <div className={cls.contents}>
          <div>
            <CBreadCrumb current={router.pathname.substring(1)} />
            <h1 className={`${cls.title} mt-2`}>{t(title)}</h1>
          </div>
          <div className={`${cls.inputs}`}>
            <CInputGenerator
              icon={<SearchIcon />}
              onChange={handleSearch}
              placeholder="Izlash..."
              classes="w-full small:w-[320px] rounded-full bg-white"
            />
            <div className={cls.sort}>
              <div onClick={handleSort} className={cls.arrow}>
                <KeyboardArrowUpRounded
                  style={{
                    color:
                      queries[type + "_sort"] == "price" ? "#111" : "#8B99AF",
                  }}
                  className={cls.up}
                />
                <KeyboardArrowDownRounded
                  style={{
                    color:
                      queries[type + "_sort"] == "-price" ? "#111" : "#8B99AF",
                  }}
                  className={cls.down}
                />
              </div>
              <div className={cls.clear}>
                {queries[type + "_sort"] ? (
                  <ClearRounded
                    onClick={handleClearFilter}
                    style={{ color: "#8B99AF" }}
                  />
                ) : (
                  <FilterIcon />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
