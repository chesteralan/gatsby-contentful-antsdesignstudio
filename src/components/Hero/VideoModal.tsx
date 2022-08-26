import React from "react";
import Modal from "../Modal/Modal";

type Props = {
  youtubeId: string;
  close: any;
};

const VideoModal = ({ youtubeId, close }: Props) => {
  return (
    <Modal>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        onClick={() => close(false)}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => close(false)}
            >
              &times;
            </button>
            <div className="modal-body">
              <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="Ants Designs Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
