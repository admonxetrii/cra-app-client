import styled from "styled-components";

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;
const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;
const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;
const error = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.error};
`;

const success = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.success};
`;

const variants = {
  body,
  label,
  caption,
  error,
  success,
  hint,
};

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};