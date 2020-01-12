import styled from "@emotion/styled";

const Button = styled.div(props => ({
  backgroundColor: props.theme.colors.primary,
  borderRadius: "3px",
  border: "none",
  textAlign: "center",
  color: "white",
  fontSize: "10pt",
  padding: "1em",
  marginTop: "1rem",
  cursor: "pointer",
  [`:hover`]: {opacity: .8}
}));

export default Button;