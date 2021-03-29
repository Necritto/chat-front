import React, { useMemo } from "react";
import styled from "styled-components";

import { firstLetterName } from "utils/helpers/firstLetterName";

interface AvatarPropsInterface extends IsGroupInterface {
  name: string;
}

interface IsGroupInterface {
  isGroup?: boolean;
}

const Avatar = ({ name, isGroup }: AvatarPropsInterface) => (
  <AvatarWrapper isGroup={isGroup}>{useMemo(() => firstLetterName(name), [name])}</AvatarWrapper>
);

export default React.memo(Avatar);

const AvatarWrapper = styled.div<IsGroupInterface>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.isGroup ? "#222222" : "#c2a4f5")};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
