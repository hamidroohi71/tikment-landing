import React, { useState } from "react";
import styled from "styled-components";
import CustomerCarousel from "./customerCarousel";
import { useSpring, animated, easings } from "react-spring";

export default function Customer() {
  const [showComment, setShowComment] = useState(false);
  const styleProps2 = useSpring({
    from: { opacity: 1 },
    to: { opacity: showComment ? 0 : 1 },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  return (
    <CustomerElement>
      <Statistics style={styleProps2}>
        <UntilToday>
          تا امروز
          <Date>1401/03/03</Date>
        </UntilToday>
        <MiddleText>سیستم حضور و غیاب تیکمنت</MiddleText>
        <TotalCustomer>
          در
          <TotalNumber>34561</TotalNumber>
          سازمان خصوصی و دولتی فعال بوده است.
        </TotalCustomer>
      </Statistics>
      <CustomerCarousel
        showComment={showComment}
        enterComment={() => {
          setShowComment(true);
        }}
      />
    </CustomerElement>
  );
}

const CustomerElement = styled.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8vh 10vw;
  position: relative;
`;

const Statistics = styled(animated.div)`
  display: flex;
  flex-direction: column;
`;

const UntilToday = styled.p`
  font-size: 3vw;
  color: #183573;
  display: flex;
  align-items: center;
`;

const Date = styled.span`
  display: inline-block;
  font-size: 5vw;
  padding: 0 18px;
  line-height: 128px;
  background: #f9f8f7 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 80px #75c9db80, 0px 3px 3px #8125254d;
  border: 1px solid #75c9db4d;
  border-radius: 36px;
  opacity: 1;
  backdrop-filter: blur(2px);
  margin-right: 25px;
`;

const MiddleText = styled.p`
  font-size: 4vw;
  color: #e67205;
  margin: 0;
`;

const TotalCustomer = styled(UntilToday)``;

const TotalNumber = styled(Date)`
  margin: 0 25px;
  color: #3b0002;
`;
