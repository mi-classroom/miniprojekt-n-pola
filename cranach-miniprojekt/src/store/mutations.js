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
  }
};
