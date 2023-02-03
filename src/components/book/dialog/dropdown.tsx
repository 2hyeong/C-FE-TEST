//
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
// store
import { targetState } from "@/store/book";
// types
import type { TTarget } from "@/types/book";
// emotion
import styled from "@emotion/styled";

interface IOptions {
  target: TTarget;
  label: string;
}

export default function Dropdown() {
  const options: IOptions[] = [
    {
      target: "title",
      label: "제목",
    },
    { target: "person", label: "저자명" },
    { target: "publisher", label: "출판사" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useRecoilState(targetState);

  useEffect(() => {
    setSelectedOption(options[0].target);
    return () => {
      setSelectedOption("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption === ""]);

  const toggle = () => setIsOpen(!isOpen);

  const hanldeClick = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <>
      <DropDownHeader onClick={toggle}>
        {options.filter((o) => o.target === selectedOption)[0]?.label}
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {options
            .filter((o) => o.target !== selectedOption)
            .map((option) => (
              <ListItem
                onClick={hanldeClick(option.target)}
                key={`search-book-dropdown-${option.target}`}
              >
                {option.label}
              </ListItem>
            ))}
        </DropDownList>
      )}
    </>
  );
}

const DropDownHeader = styled("div")`
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #353c49;
`;

const DropDownList = styled("ul")`
  position: absolute;
  width: 100px;
  height: 60px;

  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  bottom: 20px;
`;

const ListItem = styled("li")(({ theme }) => ({
  ...theme.typography.caption,
  display: "flex",
  alignItems: "center",
  color: "#8d94a0",
  cursor: "pointer",
  width: "100px",
  height: "30px",
  margin: "0 8px",
  fontSize: "14px",

  "&:hover": {
    color: "#000",
  },
}));
