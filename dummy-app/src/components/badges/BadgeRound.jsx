import styled from "@emotion/styled";

const BadgeRound = styled.div(props => ({
  backgroundColor: props.theme.colors.primary,
  borderRadius: "100%",
  border: "2px solid white",
  textAlign: "center",
  color: "white",
  position: "relative",
  top: "-2.25rem",
  right: "-.75rem"
}));

export default BadgeRound;
