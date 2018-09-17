import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  margin: 5em 0 0 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: ${props => props.margin};
`;

const Title = styled.h1`
  font-size: 5.6em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#754D63"};
  margin: 0;
`;

const Line = styled.div`
  width: 136px;
  height: 14px;
  background-color: #c93f50;
  position: absolute;
  left: 0;
  bottom: 17em;
`;

function Flame() {
  return (
    <svg
      className="container"
      width="278px"
      height="380px"
      viewBox="0 0 278 380"
      version="1.1"
    >
      <g className="cir" data-name="Layer 5">
        <circle className="cls-1 cirGroup1" cx="59.04" cy="98.87" r="3.48" />
        <circle
          id="my-circle"
          className="cls-1 cirGroup2"
          cx="35.53"
          cy="189.04"
          r="6.31"
        />
        <circle
          id="my-circle1"
          className="cls-1 cirGroup2"
          cx="159.7"
          cy="173.67"
          r="3.47"
        />
        <circle className="cls-1 cirGroup3" cx="48.51" cy="159.07" r="3.47" />
        <circle className="cls-1 cirGroup3" cx="141.07" cy="137.56" r="2.45" />
        <circle
          id="my-circle2"
          className="cls-1 cirGroup2"
          cx="100.67"
          cy="131.2"
          r="2.45"
        />
      </g>

      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Catatek" transform="translate(-950.000000, -161.000000)">
          <g id="Flame" transform="translate(950.000000, 161.000000)">
            <path
              d="M109.068725,35 C87.4825666,179.510237 19.0052532,180.8275 11.4970495,255.528156 C3.95513555,330.563813 84.5321485,376.855286 97.8048546,380 C97.8048546,380 59.9522972,338.523712 63.5112952,303.114301 C65.9758481,278.594483 76.626049,269.718376 96.7287442,242.883802 C111.176984,223.597223 127.493154,197.131876 139.488018,158.04439 C182.174432,193.456029 200.479589,214.060754 209.007815,256.819752 C217.536137,299.578798 182.319139,376.464619 182.319139,376.464619 C309.696981,285.487976 277.064951,146.60634 109.068724,35 L109.068725,35 Z"
              id="path4355"
              fill="#C93F50"
              opacity="0.751004464"
              className="flame"
            />
            <path
              d="M26.4681468,271.189851 C19.8809342,336.923531 84.795099,377.245128 96.3876652,380 C96.3876652,380 68.7896347,343.896662 71.8981131,312.876864 C74.050688,291.396705 83.3527216,283.620946 100.910696,260.112985 C113.529989,243.217313 127.780759,220.032806 138.25724,185.790896 C175.540149,216.812645 191.528128,234.863055 198.976799,272.321331 C206.425554,309.779649 182.661324,375.723341 182.661324,375.723341 C293.914904,296.024838 258.418849,175.77079 111.688606,78 C92.8349553,204.595677 33.0259165,205.749641 26.4681468,271.189851 Z"
              id="path4355"
              fill="#C93F50"
              className="flame"
            />
            <path
              d="M0.508810287,232.762306 C-7.44562999,311.960685 80.2905165,374.680828 94.2892107,378 C94.2892107,378 51.6144546,320.362172 55.368122,282.988367 C57.9674807,257.108273 69.2002243,247.73975 90.4024933,219.416486 C105.64102,199.059954 122.849649,171.126399 135.500606,129.870473 C180.521874,167.246629 189.221359,182.536244 220.607855,232.762306 C251.994351,282.988367 204.097828,352.639978 204.097828,352.639978 C338.44296,256.616262 280.602699,117.797879 103.417443,0 C80.6505698,152.527172 8.42769638,153.917511 0.508810287,232.762306 Z"
              id="path4355"
              fill="#754D63"
              opacity="0.712444196"
              className="flame"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default function Splash() {
  return (
    <Row>
      <Column>
        <Title>Make</Title>
        <Title>Something</Title>
        <Title color="#C93F50">Amazing</Title>
      </Column>
      <Column>
        <Flame />
      </Column>
      <Line />
    </Row>
  );
}
