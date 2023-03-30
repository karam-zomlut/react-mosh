import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

const Liked = styled(AiFillHeart)`
  font-size: 3rem;
  color: #ff5757;
`;

const UnLike = styled(AiOutlineHeart)`
  font-size: 3rem;
`;

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    onClick();
    setLiked((prev) => !prev);
  };
  return (
    <>
      {liked === true ? (
        <Liked onClick={handleClick} />
      ) : (
        <UnLike onClick={handleClick} />
      )}
    </>
  );
};

export default Like;
