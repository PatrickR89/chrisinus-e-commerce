import React, { useState, useEffect } from "react";
import axios from "axios";

import { useAuthenticationContext } from "../../../contexts/authentication_context";
import { useErrorReport } from "../../../hooks/useErrorReport";
import { PropertiesModalContainer } from "./PropertiesModalContainer";

const DimensionsModal = ({ closeModal, item }) => {
  const errorReport = useErrorReport();
  const { header } = useAuthenticationContext();
  const [dimensions, setDimensions] = useState({
    product_id: item.id,
    width: 0,
    height: 0,
    depth: 0,
    weight: 0
  });

  const [isEdit, setIsEdit] = useState(false);

  function updateDimension() {
    if (isEdit) {
      axios({
        url: `/api/productdimensions/${item.product_id}`,
        method: "put",
        headers: header(),
        data: { dimensions }
      })
        .then((response) => {
          if (response.data.changedRows > 0) {
            const info = `"${item.name}" dimension edited`;
            axios.post("/api/system/info", { info });
            return alert(`"${item.name}" updated!`);
          } else {
            return alert(`"${item.name}" failed to update!`);
          }
        })
        .catch((error) => {
          errorReport(
            error,
            `/api/productdimensions/${item.id}`,
            window.location.pathname,
            "put"
          );
        });
    } else {
      axios({
        url: `/api/productdimensions`,
        method: "post",
        headers: header(),
        data: { dimensions }
      })
        .then((response) => {
          const info = `"${item.name}" dimension added`;
          axios.post("/api/system/info", { info });
          return;
        })
        .catch((error) => {
          errorReport(
            error,
            `/api/productdimensions`,
            window.location.pathname,
            "post"
          );
        });
    }
  }

  function updateValue(e) {
    let name = e.target.name;
    let value = e.target.value;

    setDimensions({ ...dimensions, [name]: value });
  }

  useEffect(() => {
    axios({
      url: `/api/productdimensions/${item.id}`,
      method: "post",
      headers: header(),
      data: { id: item.id }
    })
      .then((response) => {
        if (response.data[0] === undefined) {
          setIsEdit(false);
        } else {
          setIsEdit(true);
          setDimensions(response.data[0]);
        }
      })
      .catch((error) => {
        errorReport(
          error,
          `/api/productdimensions/${item.id}`,
          window.location.pathname,
          "post"
        );
      });

    return () => {
      setDimensions({
        product_id: 0,
        width: 0,
        height: 0,
        depth: 0,
        weight: 0
      });
    };
  }, [item]);

  return (
    <PropertiesModalContainer>
      <div className="content glass">
        <div className="header">
          <h2>Dimenzije za: {item.name}</h2>
        </div>
        <p>{item.id}</p>
        <div className="body">
          <div className="distancer">
            <label htmlFor="width">Širina (mm):</label>
            <input
              value={dimensions.width}
              type="number"
              name="width"
              id="width"
              className="glass"
              onChange={updateValue}
            />
            <label htmlFor="height">Visina (mm):</label>
            <input
              value={dimensions.height}
              type="number"
              name="height"
              id="height"
              className="glass"
              onChange={updateValue}
            />
            <label htmlFor="depth">Dubina/dužina (mm):</label>
            <input
              value={dimensions.depth}
              type="number"
              name="depth"
              id="depth"
              className="glass"
              onChange={updateValue}
            />
            <label htmlFor="weight">Težina (g):</label>
            <input
              value={dimensions.weight}
              type="number"
              name="weight"
              id="weight"
              className="glass"
              onChange={updateValue}
            />
          </div>
        </div>
        <div className="footer">
          <button className="btn" onClick={closeModal}>
            Zatvori
          </button>
          <button
            className="btn"
            onClick={() => {
              updateDimension();
              closeModal();
            }}
          >
            Spremi
          </button>
        </div>
      </div>
    </PropertiesModalContainer>
  );
};

export default DimensionsModal;
