import React from 'react';
import styled from 'styled-components';
import Photo from '../../genericComponents/Photo';
import { Birkner } from '../../images/who-we-are/operations';

const PhotoRow = (props: any) => {
  const { photos } = props;

  function handleClick(e: any) {
    let clicked = e.target.src;
    let swap = document.getElementById('main')?.getAttribute('src');
    console.log('Clicked on: ' + clicked + '\nSwapped with: ' + swap);
  }

  return (
    <PhotoRowContainer onClick={handleClick}>
      <MainPic>
        <img alt="Main" id="main" src={Birkner} />
      </MainPic>
      <Row>
        {photos.map((photo: any) => (
          <Photo
            alt={photo.alt}
            key={photo.id}
            src={photo.src}
            title={photo.title}
          />
        ))}
      </Row>
    </PhotoRowContainer>
  );
};

const PhotoRowContainer = styled.div``;

const MainPic = styled.div`
  width: inherit;
  overflow-x: hidden;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
`;

export default PhotoRow;
