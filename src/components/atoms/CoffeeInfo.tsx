import { FC } from "react";

export type CoffeeInfoProps = {
  label: string;
  value: string;
};

const CoffeeInfo: FC<CoffeeInfoProps> = ({ label, value }) => {
  return (
    <div
      style={{
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
        textAlign: "left"
      }}
    >
      <span>
        <strong>{`${label}: `}</strong>
      </span>
      <span>{value}</span>
    </div>
  );
};

export default CoffeeInfo;
