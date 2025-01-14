import React, { useEffect } from "react";

import styled from "styled-components";

import { useAuthenticationContext } from "../../../contexts/authentication_context";
import { useLanguageContext } from "../../../contexts/language_context";
import { useInfoContext } from "../../../contexts/admin/info_context";

import { ListHead, ListLink, ListWrapper } from "../elements";
import WhenLoading from "../../public/WhenLoading";
import WhenError from "../../public/WhenError";

const ListInfo = () => {
  const { items, getInfoPages, resetTable, loading, error, clearError } =
    useInfoContext();
  const { header } = useAuthenticationContext();
  const { translation } = useLanguageContext();
  const { title, titleShow, content } = translation;
  const titles = ["ID", title, titleShow, content];

  useEffect(() => {
    getInfoPages();
  }, []);

  if (loading) {
    return <WhenLoading />;
  }

  if (error) {
    return <WhenError handleError={clearError} />;
  }

  return (
    <ListWrapper>
      <h2>{translation.infoPages.toUpperCase()}</h2>
      <ListHead colTitles={titles} />
      {Array.isArray(items) &&
        items?.map((infoPage, index) => {
          return (
            <ListLink
              key={index}
              index={index}
              cols={4}
              url={`/admin/information/info/${infoPage.id}`}
            >
              <p>{infoPage.id}</p>

              <p>{infoPage.title}</p>
              <h4>{infoPage.show_title}</h4>

              {infoPage.content && (
                <p>{infoPage.content.substring(0, 15)}...</p>
              )}
            </ListLink>
          );
        })}
      <ResetButton>
        <button
          onClick={() => resetTable(header)}
          className="btn mt-1 btn-delete"
        >
          {translation.reset}
        </button>
      </ResetButton>
    </ListWrapper>
  );
};

const ResetButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default ListInfo;
