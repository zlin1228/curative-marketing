import styled, { css } from 'styled-components';

import { motion } from 'styles/motion';
import { shadows } from 'styles/shadows';

import gray_checkmark from 'assets/images/gray_checkmark.svg';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

import getEvenWidth from 'utils/getEvenWidth';

const travelDistance = 10;

const triangleCSS = css`
  content: '';
  position: absolute;
  transform: rotate(45deg);
  background: ${colorMap.signalOrange[400]};
`;

const simpleTriangleCSS = css`
  &:before {
    ${triangleCSS}
    width: 140px;
    height: 140px;
    top: -75px;
    left: -75px;
    z-index: 1;
  }
`;

const detailTriangleDistance = 96;

const detailTriangleCSS = css`
  &:before {
    ${triangleCSS}
    width: 160px;
    height: 160px;
  }
`;

const detailCSS = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  transition: transform 0.3s ease-in 0s;
  transform: translateY(100%);
  z-index: 4;
  overflow: auto;
`;

const detailHoverCSS = css`
  &:hover,
  &.active {
    ${shadows.card}
    .detail {
      transform: translateY(0);
    }
  }
`;

export const CarddeckStyles = styled.section`
  padding: 48px 0;
  background: ${props => props.bgColor || 'transparent'};

  ${media.md} {
    padding: ${props => (props.hasTopPadding ? '96px 0' : '0 0 96px')};
  }

  .kicker {
    text-align: ${({ alignment }) => alignment};
    color: ${({ darkMode }) => (darkMode ? colorMap.white : colorMap.signalOrange[800])};
    font: ${font('display-xs', 'bold')};
    margin-bottom: 24px;
  }

  .heading-content {
    margin-bottom: 56px;
  }

  .heading {
    text-align: ${({ alignment }) => alignment};
    margin: 0 auto;
    margin-bottom: 16px;
    * {
      color: ${colorMap.black};
      font: ${font('display-sm', 'bold')};
      margin-bottom: 0;
      strong {
        color: ${colorMap.clearBlue[700]};
      }
      ${media.md} {
        font: ${font('display-lg', 'bold')};
      }
    }
  }
  .subhead {
    text-align: ${({ alignment }) => alignment};
    justify-content: ${({ alignment }) => alignment};
    margin: 0 auto;
    margin-bottom: 2rem;
    font: ${font('text-lg')};

    p + a > .button {
      margin-top: 16px;
    }
  }

  .arrow-icon-up,
  .arrow-icon-down {
    display: flex;
    width: 100%;
    justify-content: end;
    position: relative;
    bottom: 0;
    z-index: 3;
    svg {
      width: 25px;
      height: 25px;
      color: ${colorMap.offWhite[50]};
    }
  }

  .arrow-icon-up svg {
    animation: animateUp 2s infinite;
  }
  .arrow-icon-down svg {
    animation: animateDown 2s infinite;
  }

  @keyframes animateUp {
    0% {
      opacity: 0;
      transform: translateY(${travelDistance}px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-${travelDistance}px);
    }
  }
  @keyframes animateDown {
    0% {
      opacity: 0;
      transform: translateY(-${travelDistance}px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(${travelDistance}px);
    }
  }

  .two-column {
    max-width: 770px;
    margin: 0 auto;
  }

  .pricing-card-swiper {
    ${media.lg} {
      max-width: 1170px;
      padding: 0 12px;
    }
  }
`;

export const CardDeckGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  ${media.md} {
    grid-template-columns: repeat(${({ tabletColumns }) => tabletColumns || 2}, 1fr);
  }
  ${media.lg} {
    grid-template-columns: repeat(${({ desktopColumns }) => desktopColumns || 3}, 1fr);
  }

  &.link-card-deck {
    width: ${({ cardCount }) => (cardCount < 3 ? 'fit-content' : '100%')};
    margin: ${({ cardCount }) => cardCount < 3 && 'auto'};
  }
`;

export const TestimonialCard = styled.div`
  padding: 2rem;
  background: ${colorMap.white};
  text-align: center;
  height: auto;
  margin-bottom: 32px;
  ${media.md} {
    margin-bottom: 0;
    height: 100%;
  }
  .quote {
    margin-top: 2rem;
    color: ${colorMap.black};
    font: ${font('text-xl', 'medium')};
    font-style: italic;
  }
  .company-name {
    margin-top: 24px;
    color: ${colorMap.clearBlue[700]};
    font: ${font('text-xl', 'semiBold')};
  }
`;

export const SimpleCard = styled.div`
  padding: 110px 2rem;
  background: ${colorMap.white};
  border: 1px solid ${colorMap.gray[200]};
  height: 100%;
  position: relative;
  overflow: hidden;

  ${simpleTriangleCSS}

  .heading {
    text-align: left;
    margin-bottom: 2rem;
    max-width: 274px;
    margin-left: 0;
    * {
      color: ${colorMap.black};
      font: ${font('display-sm', 'semiBold')};
      margin-bottom: 0;
      strong {
        color: ${colorMap.clearBlue[700]};
      }
    }
  }
  .subhead {
    p {
      font: ${font('text-xl', 'medium')};
      text-align: left;
      color: ${colorMap.gray[700]};
    }
  }
`;

export const LargeCard = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 460px;
  padding: 2rem;
  background: ${props => props.theme};
  border: 1px solid ${colorMap.gray[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${shadows.transition}
  ${detailHoverCSS}

  .heading-container {
    display: flex;
    flex-direction: column;
    margin: auto 0;
    justify-content: center;
    align-items: center;
  }

  .heading {
    text-align: center;
    max-width: 380px;
    margin-bottom: 2rem;
    * {
      color: ${colorMap.black};
      font: ${font('display-xs', 'bold')};
      margin-bottom: 0;
      strong {
        color: ${colorMap.clearBlue[700]};
      }
      ${media.md} {
        font: ${font('display-sm')};
      }
    }
  }
  &.large-card .subhead {
    margin-bottom: auto;
    p {
      font: ${font('text-lg', 'semiBold')};
      color: ${colorMap.black};
      margin-bottom: 0.5rem;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        width: 100%;
        margin-bottom: 16px;
        padding-left: 32px;
        position: relative;
        text-align: left;
        &:before {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          top: 7px;
          left: 0;
          background: ${colorMap.signalOrange[400]};
        }
      }
    }
  }

  .detail {
    ${detailCSS}
    background: ${props => props.theme};
    align-items: center;
    text-align: center;
  }

  .arrow-icon-up,
  .arrow-icon-down {
    svg {
      color: ${colorMap.clearBlue[700]};
    }
  }
`;

export const ServiceCard = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 460px;
  padding: 1.5rem;
  background: ${({ background }) => (background ? `url(${background})` : colorMap.clearBlue[700])};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${shadows.transition}
  ${detailHoverCSS}

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, ${colorMap.clearBlue[700]}88, ${colorMap.clearBlue[700]}88);
  }
  &.service-card .heading {
    position: relative;
    z-index: 3;
    text-align: center;
    margin: auto;
    * {
      font: ${font('display-lg')};
      color: ${colorMap.offWhite[50]};
      margin-bottom: 0;
    }
  }

  .detail {
    background: ${colorMap.clearBlue[700]};
    ${detailCSS}
    padding: 0;
    border: 1rem solid ${colorMap.clearBlue[700]};
    ${detailTriangleCSS}
    &:before {
      top: -${detailTriangleDistance}px;
      left: -${detailTriangleDistance}px;
    }

    .heading-container {
      margin-top: 90px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .subhead {
      margin: 0;
      p {
        font: ${font('text-xl', 'medium')};
        color: ${colorMap.offWhite[50]};
      }
    }
  }
`;

export const TeamCard = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  background: ${colorMap.clearBlue[700]};
  ${shadows.transition}
  ${detailHoverCSS}

  .arrow-icon-down {
    svg {
      color: ${colorMap.clearBlue[700]};
    }
  }

  .heading {
    font: ${font('display-sm')};
    color: ${colorMap.white};
    text-align: left;
    margin-bottom: 24px;
  }

  .user-container {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1rem;
    border: 1rem solid ${colorMap.clearBlue[700]};
    min-height: 260px;
    background: ${colorMap.clearBlue[700]};
    overflow: hidden;

    .heading {
      width: 100%;
    }

    .user-info {
      margin-bottom: auto;
    }

    ${detailTriangleCSS}
    &:before {
      bottom: -${detailTriangleDistance}px;
      right: -${detailTriangleDistance}px;
    }
  }

  .role {
    font: ${font('text-xl', 'semiBold')};
    color: ${colorMap.skyBlue[500]};
  }

  .detail {
    ${detailCSS}
    background: ${colorMap.white};
    .heading-container {
      display: flex;
      .arrow-icon-down {
        width: min-content;
      }
    }
    .heading {
      width: 100%;
      color: ${colorMap.clearBlue[700]};
      margin-bottom: 1rem;
    }
    .role {
      margin-bottom: 1rem;
    }
    .excerpt {
      margin-bottom: auto;
      font: ${font('text-md')};
      color: ${colorMap.gray[900]};
    }
  }
`;

export const LinkCardIcon = styled.div`
  background: ${colorMap.white};
  border: 1px solid ${colorMap.gray[200]};
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  padding: 40px;
  ${shadows.transition}

  &:hover {
    ${shadows.card}
  }

  a {
    text-decoration: none;
  }

  .card-heading,
  .card-subhead {
    color: ${colorMap.black};
    h2 {
      font: ${font('text-xl')};
      margin-bottom: 8px;
    }
  }

  .card-link {
    color: ${colorMap.clearBlue[700]};
    font: ${font('text-lg', 'bold')};
    span {
      margin-right: 12px;
    }
  }

  .card-image-wrapper {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    position: relative;
  }

  ${media.md} {
    width: 100%;
    max-width: 370px;
  }
`;

export const LinkCardImage = styled.div`
  background: ${colorMap.clearBlue[700]};
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  margin: 0 auto;
  ${shadows.transition}

  &:hover {
    ${shadows.card}
  }

  a {
    text-decoration: none;
  }

  ${simpleTriangleCSS}

  .card-link {
    padding: 15px 23px 17px;
    background: ${colorMap.clearBlue[700]};
    color: ${colorMap.white};
    font: ${font('text-xl', 'bold')};
    text-align: right;
    svg {
      margin-left: 14px;
    }
  }

  .card-image {
    transition: 0.2s ease-in-out;
    transform: scale(0.9);
  }
  .card-image:hover {
    transform: scale(1);
  }

  ${media.md} {
    width: 100%;
    max-width: 370px;
  }
`;

export const SpeakerCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${colorMap.white};
  ${shadows.card}
  border-radius: 24px;
  padding: 32px 16px;
  gap: 48px;
  align-items: center;
  justify-content: center;

  .heading {
    width: 100%;
    text-align: center;
    font: ${font('display-xs', 'bold')};
  }

  .speaker-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: top;
    gap: 16px;
  }

  .speaker {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: start;
    align-items: center;
    text-align: center;
    ${getEvenWidth(2, 8)}
    color: ${colorMap.gray[700]};
    font: ${font('text-sm')};
  }

  .headshot {
    width: calc(100% - 48px);
    border-radius: 50%;
    overflow: hidden;
  }

  .name,
  .role {
    width: 100%;
    padding: 0 8px;
  }

  .name {
    color: ${colorMap.black};
    font: ${font('text-md', 'semiBold')};
  }

  .role {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  ${media.sm} {
    padding: 32px 24px;
    .heading {
      font: ${font('display-sm')};
    }
    .speaker-container {
      gap: 24px;
    }
    .speaker {
      ${getEvenWidth(3, 24)}
    }
    .headshot {
      width: calc(100% - 80px);
    }
    .name {
      font: ${font('text-lg')};
    }
  }

  ${media.lg} {
    padding: 32px 128px;
    .heading {
      font: ${font('display-md')};
    }
    .speaker-container {
      gap: 32px;
    }
    .speaker {
      ${getEvenWidth(3, 32)}
      font: ${font('text-lg')};
    }
    .headshot {
      width: calc(100% - 120px);
    }
    .name {
      font: ${font('display-xs')};
    }
  }
`;

export const PricingCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  padding: 40px;
  border-top: 5px solid ${({ color }) => color};

  .colorizeText {
    color: ${colorMap.clearBlue[700]};
  }

  .kicker {
    color: ${({ color }) => color};
    margin-bottom: 24px;
  }

  .heading {
    margin: 0;
    margin-bottom: 4px;
    font: ${font('display-lg', 'bold')};
  }

  .copay {
    margin-bottom: 24px;
    color: ${colorMap.gray[500]};
    font: ${font('text-xl', 'bold')};
  }

  .subhead {
    text-align: start;
    width: 100%;
    margin: 0 0 8px;

    p {
      margin-bottom: 0;
    }
    ul {
      margin: 0;
    }
    li {
      align-items: center;
      padding-left: 12px;
      list-style-image: url(${gray_checkmark.src});
      p {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 16px;
        height: 100%;
        font: ${font('text-md', 'bold')};
      }
    }
  }
  a {
    width: 100%;
  }
  ${shadows.pricing}
  ${motion.standard}
`;

export const MiniPricingCardContainer = styled.div`
  position: sticky;
  top: ${({ top }) => `${top + 12}px`};
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1px;
  margin: 16px 0px;
  background: ${colorMap.gray[200]};
  overflow: hidden;
  border: 1px solid ${colorMap.gray[200]};
  border-radius: 0 0 10px 10px;
  ${shadows.pricing}
`;

export const MiniPricingCardStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 30px;
  background: ${colorMap.white};
  ${shadows.pricing}
  border-radius: 0 0 10px 10px;
  border: 1px solid ${colorMap.gray[200]};
  border-top: 5px solid ${({ color }) => color};

  .heading-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    text-align: start;
    ${media.lg} {
      text-align: ${({ alignment }) => alignment};
    }
  }

  .colorizeText {
    color: ${colorMap.clearBlue[700]};
  }

  .heading {
    font: ${({ noCoPay }) => font(`text-${noCoPay ? 'xl' : 'sm'}`, 'bold')};
    margin: 0;
  }

  .copay,
  .subhead {
    color: ${colorMap.gray[500]};
    gap: 1rem;
    p {
      font: ${font('text-md', 'medium')};
      margin-bottom: 0;
    }
  }

  ${media.lg} {
    flex-direction: column;
    border-radius: 0;
    box-shadow: none;
    border: none;
    border-top: 5px solid ${({ color }) => color};
    gap: 24px;
  }
`;
