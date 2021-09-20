import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SCoutainer>
      <SImg src={image} height={160} width={160} alt={name} />
      <SName>{name}</SName>
    </SCoutainer>
  );
};

const SCoutainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
