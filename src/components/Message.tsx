import React from 'react';
import { color, ColorProps } from 'styled-system';
import styled from 'styled-components';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOwner: boolean;
}

type Props = ContainerProps &
  ColorProps & {
    content: string;
  };

const Container = styled.div<ContainerProps>`
  ${color};
  ${(props) =>
    props.isOwner ? `align-self: flex-end` : `align-self: flex-start`};
`;

const Message: React.FC<Props> = ({ content, isOwner, ...props }) => (
  <Container isOwner={isOwner} {...props}>
    {content}
  </Container>
);

export default Message;
