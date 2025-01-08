import { TouchableOpacity } from "react-native";
import theme from "src/theme";
import styled from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ isActive }: FilterStyleProps) =>
    isActive && `border: 1px solid ${theme.COLORS.GREEN_700}`};

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;

  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.WHITE};
`;
