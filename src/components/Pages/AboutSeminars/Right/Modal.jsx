import CModal from "components/UI/CModal";
export default function AboutSeminarsRightSideModal({
  handleModalOpen = () => {},
}) {
  return (
    <div>
      <CModal width="370px" onClose={handleModalOpen}>
        aaa
      </CModal>
    </div>
  );
}
