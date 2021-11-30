import { Modal } from "reactstrap";

export default function VideoComponent({ isOpen, toggle }) {
    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
        >
            <video controls>
                <source src="movie.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Modal>
    )
}
