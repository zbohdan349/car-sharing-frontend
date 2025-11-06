import styled, { css } from "styled-components";
import { Select } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";

const commonStyles = css`
  font-size: 12px;
  border: none;
  padding-left: 0;
  padding-right: 0;
`;

export const StyledRouteSelect = styled(Select)`
  .mantine-InputWrapper-label {
    font-size: 16px;
    font-weight: 600;
  }
  .mantine-Select-input {
    ${commonStyles}
  }
`;

export const StyledDateTimePicker = styled(DateTimePicker)`
  .mantine-DateTimePicker-label {
    font-size: 16px;
    font-weight: 600;
  }
  .mantine-DateTimePicker-input {
    ${commonStyles}
  }
`;
