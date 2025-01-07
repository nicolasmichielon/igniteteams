import styled from "styled-components/native";
import { TextInput } from "react-native";
import theme from "src/theme";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  color: ${theme.COLORS.WHITE};
  background-color: ${theme.COLORS.GRAY_700};

  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;

  border-radius: 6px;
  padding: 16px;
`;
