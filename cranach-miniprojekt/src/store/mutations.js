export default {
  mutateSetPaintings(state, paintings) {
    state.paintings = paintings;
  },
  mutateRemoveImage(state, image) {
    const temp = state.paintings;
    temp[image.indexYear].items.splice(image.indexImage, 1);
    if (!temp[image.indexYear].items.length) { temp.splice(image.indexYear, 1); }
    state.paintings = temp;
  },
  mutateOpenModal(state) {
    state.modalOpen = true;
  },
  mutateCloseModal(state) {
    state.modalOpen = false;
  },
  muatateShowImageModal(state, img) {
    state.currentModalImage = img;
  },
  mutateNextImage(state) {
    let { indexImage, indexYear } = state.currentModalImage;
    if (indexImage + 1 >= state.paintings[indexYear].items.length) {
      indexYear = (indexYear + 1) % state.paintings.length;
      indexImage = 0;
    } else {
      indexImage += 1;
    }

    state.currentModalImage = { indexImage, indexYear };
  },
  mutatePrevImage(state) {
    let { indexImage, indexYear } = state.currentModalImage;
    if (indexImage - 1 < 0) {
      indexYear = (((indexYear - 1) % state.paintings.length) + state.paintings.length)
       % state.paintings.length;
      indexImage = state.paintings[indexYear].items.length - 1;
    } else {
      indexImage -= 1;
    }

    state.currentModalImage = { indexImage, indexYear };
  },
  mutateLang(state, newLang) {
    state.currentLang = newLang;
  },
  mutateSize(state, size) {
    state.currentSize = size;
  }
};
