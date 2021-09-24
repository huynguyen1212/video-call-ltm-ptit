import { mixinsFlexCenter } from "src/common/styles/mixins";
import styled from "styled-components";

export const SProfile = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.theme.bg.main};
  ${mixinsFlexCenter};
  flex-direction: column;

  .back {
    position: fixed;
    top: 40px;
    left: 40px;
    z-index: 5;
    cursor: pointer;
    @media(max-width: 991px) {
      top: 20px;
      left: 20px;
      width: 20px;
      height: 20px;
    }
  }

  .name {
    color: ${props => props.theme.theme.text.main};
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .avt {
    cursor: pointer;
    position: relative;
    .icon {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`