import styled from "styled-components";

type SkillCardProps = {
  title: string;
  url: string;
  color: string;
  animated?: boolean;
  alt: string;
};

export const SkillCard = ({
  url,
  title,
  color,
  animated,
  alt,
}: SkillCardProps) => {
  return (
    <Container animated={animated} color={color} className="box">
      <img src={url} alt={alt} />
      <p>{title}</p>
    </Container>
  );
};

const Container = styled.div<{ color: string; animated?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    color: ${({ color }) => color};
    font-size: 2rem;
  }

  :hover {
    img {
      filter: drop-shadow(0 0 2em ${({ color }) => color});
    }
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ${({ animated }) =>
    animated &&
    `
      img{
        animation: logo-spin infinite 20s linear;
      }
    `};

  img {
    height: 130px;
    max-width: 200px;
    transition: 0.5s;
  }
`;
