import styled, { css } from 'styled-components';
import {
  LayoutProps,
  layout,
  SpaceProps,
  space,
  BorderProps,
  border,
} from 'styled-system';

type DividerPropsType = LayoutProps & SpaceProps & BorderProps;

const Divider: React.SFC<DividerPropsType> = styled.hr<DividerPropsType>(
  ({ theme: { color } }) => css`
    ${layout};
    ${space};
    ${border};
    border-color: ${color.all.darkGray6};
  `
);

export default Divider;
