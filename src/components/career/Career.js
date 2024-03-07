import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate, FaAward, FaServer } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { PiCertificate } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";

export default function Career() {
  return (
    <VerticalTimeline>
      {/* --- 학교 --- */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2013 - 2019"
        iconStyle={{ background: "rgb(33, 150, 243)" }}
        icon={<FaUserGraduate />}
      >
        <h3 className="vertical-timeline-element-title">원주대학교</h3>
        <h4 className="vertical-timeline-element-subtitle">소프트웨어학과</h4>
      </VerticalTimelineElement>
      {/* --- 직장 --- */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(233, 30, 99)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        date="June 2019"
        iconStyle={{ background: "rgb(233, 30, 99)" }}
        icon={<BsPersonWorkspace />}
      >
        <h3 className="vertical-timeline-element-title">SRC 재활병원</h3>
        <h4 className="vertical-timeline-element-subtitle">전산실</h4>
        <p>병원정보시스템 HIS Window 개발</p>
      </VerticalTimelineElement>
      {/* --- 자격증 --- */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(51, 204, 051)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(51, 204, 051)" }}
        date="November 2019"
        iconStyle={{ background: "rgb(51, 204, 051)" }}
        icon={<PiCertificate />}
      >
        <h3 className="vertical-timeline-element-title">정보처리기사 취득</h3>
        <h4 className="vertical-timeline-element-subtitle">한국산업인력공단</h4>
      </VerticalTimelineElement>
      {/* --- 부트캠프 --- */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="September 2022"
        iconStyle={{ background: "rgb(33, 150, 243)" }}
        icon={<AiOutlineCodeSandbox />}
      >
        <h3 className="vertical-timeline-element-title">멋쟁이 사자처럼</h3>
        <h4 className="vertical-timeline-element-subtitle">online bootcamp</h4>
        <p>웹 프로그래밍 개발 및 블록체인 개발 학습</p>
      </VerticalTimelineElement>
      {/* --- 해커톤 --- */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(233, 30, 99)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        date="June 2023"
        iconStyle={{ background: "rgb(233, 30, 99)" }}
        icon={<FaAward />}
      >
        <h3 className="vertical-timeline-element-title">
          ETH Seoul Hackathon 수상
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>환경적으로 지속 가능한 행동을 장려하고 촉진하기 위해 설계된 디앱</p>
      </VerticalTimelineElement>
      {/* --- 원티드 --- */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(51, 204, 051)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(51, 204, 051)" }}
        date="October 2023"
        iconStyle={{ background: "rgb(51, 204, 051)" }}
        icon={<LiaLaptopCodeSolid />}
      >
        <h3 className="vertical-timeline-element-title">
          Wanted BackEnd Internship
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          백엔드 기반 기업 과제 수행
        </h4>
      </VerticalTimelineElement>
      {/* --- 서버 공부 --- */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Now"
        iconStyle={{ background: "rgb(33, 150, 243)" }}
        icon={<FaServer />}
      >
        <h3 className="vertical-timeline-element-title">
          Backend 프로그래밍 개발
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
      </VerticalTimelineElement>
      {/* 끝 포인트 */}
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
        icon={<VscSmiley />}
      />
    </VerticalTimeline>
  );
}
