import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

import styled from "styled-components";
import axios from "axios";
import { useLanguageContext } from "../../../contexts/language_context";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const { translation } = useLanguageContext();

  const getImages = () => {
    axios
      .get("/api/images/getimages")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        const err = `api: /api/images/getimages [imagelist[GET]], error: ${error}`;
        axios.post("/api/system/error", { err });
      });
  };

  const handleDeleteImage = (url) => {
    axios.post("/api/images/deleteimages", { url }).catch((error) => {
      const err = `api: /api/images/deleteimages [imagelist[POST]], error: ${error}`;
      axios.post("/api/system/error", { err });
    });
  };

  useEffect(() => {
    getImages();
  }, []);
  return (
    <Wrapper>
      <h2>{translation.images.toUpperCase()}:</h2>
      <div className="thumb-container">
        {Array.isArray(images) &&
          images.map((image, index) => {
            return (
              <div key={index} className="single-thumb">
                <p>{image.name}</p>
                <img className="thumb" src={`/${image.source}`} alt="" />
                <button
                  className="btn btn-delete"
                  onClick={() => handleDeleteImage(image.source)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 2rem;
  .thumb-container {
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: flex-start;
    height: 250px;
  }
  .single-thumb {
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: space-between;
    height: 100%;
    max-width: 200px;
    margin: 2rem;
    button {
      margin-bottom: 1rem;
    }
  }
  .thumb {
    max-width: 150px;
    margin: auto;
  }
`;

export default ImageList;
