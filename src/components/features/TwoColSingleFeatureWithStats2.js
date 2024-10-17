import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import tw from "twin.macro";

import rmcplantImage from '../../images/rmc.JPG';
import rmcplantVideo from '../../images/rmc.mp4'; // Import RMC video
import crusher from "../../images/crusher.JPG";
import crusherVideo from "../../images/crusher.mp4"; // Import Crusher video

const Container = tw.div`max-w-screen-lg mx-auto p-4`;
const Title = tw.h1`text-4xl font-bold text-center mb-8`;
const CardContainer = tw.div`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center`;
const Card = tw.div`relative max-w-xs w-full cursor-pointer transition-transform transform hover:scale-105`;
const CardImage = tw.img`w-full h-48 object-cover rounded-lg`;
const OverlayText = tw.div`absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-25 rounded-lg`;
const CardTitle = tw.h2`text-xl font-bold text-center`;
const Modal = tw.div`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50`;
const ModalContainer = tw.div`relative w-[90%] max-w-screen-lg`;
const CloseButton = tw.button`absolute top-0 right-0 m-4 text-white text-3xl transition-transform transform hover:scale-110 z-10`;
const Image = tw.img`h-96 w-auto object-cover mx-auto opacity-75`; // Adjusted opacity for the image
const Video = tw.video`h-96 w-auto object-cover mx-auto`; // Video style without controls
const MoreEquipmentsButtonContainer = tw.div`flex justify-center mt-8`;
const MoreEquipmentsButton = tw.button`py-2 px-6 bg-green-400 text-white font-bold rounded-lg transition-transform transform hover:scale-105`;

const EquipmentList = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const equipmentData = [
    {
      title: "RMC Plant",
      image: rmcplantImage,
      video: rmcplantVideo, // Add video property for RMC Plant
    },
    {
      title: "Crusher",
      image: crusher,
      video: crusherVideo // Add video property for Crusher
    },
    {
      title: "Vogele",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/11/PK/MP/PB/18537456/vogele-super-1800-track-sensor-paver-multiplex-rental-service-500x500.jpg",
    },
    {
      title: "Apollo Hydrostatic Sensor Paver Finisher",
      image: "https://5.imimg.com/data5/WL/AI/MY-8995763/sensor-paver-500x500.jpeg",
    },
    {
      title: "Komatsu Motor Grader",
      image: "https://img.equipmentworld.com/files/base/randallreilly/all/image/2024/01/Komatsu_GD955_7_motor_grader_AZPG_93_.65a81230ed859.png?auto=format%2Ccompress&dpr=2&q=70&rect=0%2C347%2C6720%2C3780&w=400",
    },
    { title: "Mechanical Broomer", image: "http://www.adityaind.in/wp-content/uploads/2019/06/6-2.jpg", },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

 // Function to handle button click
const handleMoreEquipmentsClick = () => {
  navigate('/equipments');
  window.scrollTo(0, 0); // Scroll to the top of the page
};


  return (
    <Container>
      <Title>Construction Site Equipment</Title>
      <CardContainer>
        {equipmentData.map((equipment, index) => (
          <Card key={index} onClick={() => openModal(index)}>
            <CardImage src={equipment.image} alt={equipment.title} />
            <OverlayText>
              <CardTitle>{equipment.title}</CardTitle>
            </OverlayText>
          </Card>
        ))}
      </CardContainer>

      {/* Centered More Equipments Button */}
      <MoreEquipmentsButtonContainer>
        <MoreEquipmentsButton onClick={handleMoreEquipmentsClick}>
          More Equipments
        </MoreEquipmentsButton>
      </MoreEquipmentsButtonContainer>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClick={handleOverlayClick}>
          <ModalContainer>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            {equipmentData[selectedImageIndex].title === "RMC Plant" ? (
              <Video autoPlay muted loop>
                <source src={rmcplantVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            ) : equipmentData[selectedImageIndex].title === "Crusher" ? (
              <Video autoPlay muted loop>
                <source src={crusherVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            ) : (
              <Image
                src={equipmentData[selectedImageIndex].image}
                alt={equipmentData[selectedImageIndex].title}
              />
            )}
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
};

export default EquipmentList;
