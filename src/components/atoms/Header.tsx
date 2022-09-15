import { CSSProperties, FC } from "react";

export const headerHeight = "60px";

const HeaderStyle: CSSProperties = {
  height: headerHeight,
  backgroundColor: "#873e23",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flex: 1
};

type HeaderProps = {
  pageTitle: string;
};

const Header: FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <header className="header" style={HeaderStyle}>
      <h1>{pageTitle}</h1>
    </header>
  );
};

export default Header;
