import { css } from "styled-components";

export const mixinsFlexCenter = css`
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

export const mixinAbsoluteFill = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const mixinTextOverflow = (lineNumber: number) => `
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${lineNumber};
  -webkit-box-orient: vertical;
`;

export const mixinAbsoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const mixinFlexWrapAlignCenter = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;


export const mixinsScrollBar = (
  width?: string,
  height?: string,
  borderRadius?: string,
  trackColor?: string,
  thumbColor?: string,
  thumbHoverColor?: string
) => `
  ::-webkit-scrollbar {
    width: ${width || '6px'};
    height: ${height || '6px'};
  }

  ::-webkit-scrollbar-track {
    background: ${trackColor || 'white'};
  }

  ::-webkit-scrollbar-thumb {
    background: ${thumbColor || '#c1c1c1'};
    border-radius: ${borderRadius || '6px'};
  }

  @media (hover: hover) and (pointer: fine) {
    ::-webkit-scrollbar-thumb:hover {
      background: ${thumbHoverColor || '#555'};
    }
  }
`;