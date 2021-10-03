import React from "react";
import Icon1 from "../../images/adcs.png";
import Icon2 from "../../images/comms.png";
import Icon3 from "../../images/eps.png";
import Icon4 from "../../images/odhs.png";
import Icon5 from "../../images/payload.png";
import Icon6 from "../../images/stms.png";
import Icon7 from "../../images/mgmt.png";
import {
  SubsystemContainer,
  SubsystemWrapper,
  SubsystemH1,
  SubsystemCard,
  SubsystemIcon,
  SubsystemH2,
  SubsystemP,
  SecondRow,
} from "./SubsystemElements";

const Subsystem = () => {
  return (
    <SubsystemContainer id="subsystem">
      <SubsystemH1>Subsystems</SubsystemH1>
      <SubsystemWrapper>
        <SubsystemCard>
          <SubsystemIcon src={Icon1} />
          <SubsystemH2>ADCS</SubsystemH2>
          <SubsystemP>
          Attitude Determination and Control Subsystem or ADCS controls the orientation and position 
          of the satellite based on a combined system of sensors  and actuators. When in orbit ADCS is also responsible for stability 
          of the satellite for pointing of the camera payload and data transmission while keeping in mind power constraints.
          </SubsystemP>
        </SubsystemCard>

        <SubsystemCard>
          <SubsystemIcon src={Icon2} />
          <SubsystemH2>COMMS</SubsystemH2>
          <SubsystemP>
          The Communications and Ground Station Subsystem or COMMS is responsible for the exchange of
           information to and fro and on-board the satellite. 
The PAGOS can track and receive the beacon of currently operational satellites
 transmitting in the ham radio frequencies. It uses two RF antennae to establish a connection.
          </SubsystemP>
        </SubsystemCard>

        <SubsystemCard>
          <SubsystemIcon src={Icon3} />
          <SubsystemH2>EPS</SubsystemH2>
          <SubsystemP>
          The Electrical Power Subsystem or EPS is responsible for harnessing,
           conditioning, storing and distributing power on-board the satellite. They also also deal with the design
           and soldering of the PCBs that are used for testing. All the PCBs that used are designed and soldered in-house.
          </SubsystemP>
        </SubsystemCard>

        <SubsystemCard>
          <SubsystemIcon src={Icon4} />
          <SubsystemH2>ODHS</SubsystemH2>
          <SubsystemP>

          ODHS or On-Board Data Handling Subsystem aims to ensure seamless and
           orderly functioning of satellite parts. Data received from the satellite 
           is processed and interpreted for understanding and use. They are responsible
            for the satellite’s smooth functioning throughout: giving
           tasks using a RTOS and 
           maintaining a link between the hardware components.
          </SubsystemP>
        </SubsystemCard>

        <SubsystemCard>
          <SubsystemIcon src={Icon5} />
          <SubsystemH2>Payload</SubsystemH2>
          <SubsystemP>
           
          Payload: the satellite's mission. Parikshit has two — primary: the 
          thermal infrared camera and secondary: passive electrodynamic tether 
          (EDT). The camera will capture thermal images of the Indian subcontinent
           for climate-based data.  The EDT will deorbit the satellite
           after the mission; something never tried before and potentially
            revolutionary in reducing space debris as well.
          </SubsystemP>
        </SubsystemCard>

        <SubsystemCard>
          <SubsystemIcon src={Icon6} />
          <SubsystemH2>STMS</SubsystemH2>
          <SubsystemP>
          The Structures, Thermal and Mechanisms Subsystem or STMS create and do 
          the final assembly of the satellite, aware of external space obstacles. 
          They will ensure the satellite can endure launch loads, survive radiation, 
          and more. Structure must follow nanosatellite specs and they ensure the sensitive
           components are
           well-placed away from harm. They need to integrate and check smooth functioning
            between parts and check thermal regulation.
          </SubsystemP>
        </SubsystemCard>

        <SecondRow>
          <SubsystemCard>
            <SubsystemIcon src={Icon7} />
            <SubsystemH2>Management</SubsystemH2>
            <SubsystemP>
            Management handles all backend operations. From logistical work like filing for reimbursement, contacting authorities, 
            having clear flow of communication to collaboration and content creation, they do a bit of everything. It's done in 
            a "sandbox" environment where one is free to explore creatively and managerially.
            </SubsystemP>
          </SubsystemCard>
        </SecondRow>
      </SubsystemWrapper>
    </SubsystemContainer>
  );
};

export default Subsystem;
