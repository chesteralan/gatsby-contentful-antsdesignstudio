import React from "react";
import Modal from "../Modal/Modal";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import type { Portfolio } from "./Portfolio";

type Props = {
  item: Portfolio;
  close: any;
};

const PortfolioModal = ({ item, close }: Props) => {
  const imageData = getImage(item?.mainImage) as IGatsbyImageData;

  return (
    <Modal>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        onClick={() => close()}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => close()}
            >
              &times;
            </button>
            <div className="modal-body">
              <GatsbyImage image={imageData} alt="header logo" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioModal;
