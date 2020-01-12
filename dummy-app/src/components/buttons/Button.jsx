import styled from "@emotion/styled";

const Button = styled.div(props => ({
  backgroundColor: props.theme.colors.primary,
  borderRadius: "3px",
  border: "none",
  textAlign: "center",
  color: "white",
  fontSize: "10pt",
  padding: "1em",
  marginTop: "1rem"
}));

export default Button;